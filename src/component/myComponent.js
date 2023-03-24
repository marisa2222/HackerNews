import { useEffect, useState } from "react";
import Loading from "./loading.js";
import HitItem from "./hitItem.js";
import "./style.css";

export default function MyComponent() {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const url = "https://hn.algolia.com/api/v1/search?query=";

  const search = () => {
    setIsLoaded(false);
    fetch(url + query)
      .then((response) => response.json())
      .then((result) => {
        setHits(result.hits);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => setIsLoaded(true));
  };

  useEffect(() => {
    search();
  }, []);

  const changeQuery = (ev) => {
    setQuery(ev.target.value);
  };

  return (
    <div>
      <div>
        <input value={query} onChange={changeQuery}></input>
        <button onClick={search}>Search</button>
      </div>
      {!isLoaded && <Loading />}
      {isLoaded && (
        <div className="table">
          <div className="table-header">
            <span style={{ width: "40%" }}>Title</span>
            <span style={{ width: "30%" }}>Author</span>
            <span style={{ width: "10%" }}>Comments</span>
            <span style={{ width: "10%" }}>Points</span>
          </div>
          {hits.map((item) => (
            <HitItem key={item.objectID} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
