import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    const result = window.confirm(
      "Você tem certeza que deseja resetar o contador?"
    );

    if (result) {
      setCount(0);
    }
  };

  return (
    <div className="container">
      <h1>Contador:</h1>

      <h2 className="count">{count}</h2>

      <div className="btn-container">
        <Button onClick={handleDecrement}>{"<"} Contador</Button>

        <Button onClick={handleReset} secondary>
          Reset
        </Button>

        <Button onClick={handleIncrement}>Contador {">"}</Button>
      </div>
    </div>
  );
}

export default App;
