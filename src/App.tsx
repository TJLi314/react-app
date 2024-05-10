import { useState } from "react";
import Alert from "./components/Alert"
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>LIVERPOOL</Alert>}
      <Button onClick={() => setAlertVisibility(true)} type="primary">
        Liverpool
      </Button>
    </div>
  );
}

export default App;