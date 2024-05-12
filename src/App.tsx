import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

function App() {
  // const [alertVisible, setAlertVisibility] = useState(false);
  // return (
  //   <div>
  //     {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>LIVERPOOL</Alert>}
  //     <Button onClick={() => setAlertVisibility(true)} type="primary">
  //       Liverpool
  //     </Button>
  //   </div>
  // );

  // const cities = ["New York", "Los Angeles", "San Francisco"];
  // return (
  //   <ListGroup
  //     items={cities}
  //     heading="Miami"
  //     onSelectItem={(item: string) => console.log(item)}
  //   />
  // );

  // return <Like onClick={() => console.log("Clicked")} />;

  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
