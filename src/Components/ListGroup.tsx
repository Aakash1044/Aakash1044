import { useState } from "react";

interface Props{
  items: string[];
  heading: string;
}


function ListGroup({items,heading}: Props) {
    
    const [selectedIndex,setselectedIndex] = useState(-1);
  return (
    <>
    <div>
    <h1>{heading}</h1>
    
    { items.length ==0 && <p>No item found</p>}
    
    <ul className="ListGroup">
        {items.map((item,index) =>(<li className= {
          selectedIndex== index ? "List-group-item active" : "list-group-item"
        }
        key={item} 
        onClick={()=> {setselectedIndex(index);}}>
          {item}</li>))}
      
    </ul>
    </div>
    </>
  );
}
export default ListGroup;
