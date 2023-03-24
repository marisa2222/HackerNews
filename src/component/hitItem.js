import "./style.css";


function HitItem ({item})
{
   
    return (
        <div  className="table-row">
          <span style={{ width: "40%" }}>
            <a href={item.url}>{item.title}</a>
          </span>
          <span style={{ width: "30%" }}>{item.author}</span>
          <span style={{ width: "10%" }}>{item.num_comments}</span>
          <span style={{ width: "10%" }}>{item.points}</span>
        </div>
      );
   
}
export default HitItem;