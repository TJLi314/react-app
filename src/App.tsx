import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";

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

  return <Like onClick={() => console.log("Clicked")} />;
}

export default App;
