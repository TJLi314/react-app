import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let food = ["Burger", "Pizza", "Poke", "Wings"];

  return (
    <div>
      <ListGroup items={items} heading = "Cities" />
      <ListGroup items={food} heading = "Food" />
    </div>
  );
}

export default App;