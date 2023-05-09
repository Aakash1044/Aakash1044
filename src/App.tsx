
import ListGroup from "./Components/ListGroup";
function App(){
  let items = [
    'Newyork',
    'San-Francis',
    'London',
    'America'
]
  return <div><ListGroup items={items} heading={"citizen"}/></div> 
}
export default  App;