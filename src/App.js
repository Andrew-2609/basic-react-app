import { useState } from "react";
import "./App.css";

function App() {

  const [counter, setCounter] = useState(1);

  function changeCounter() {
    setTimeout(() => {
      setCounter((oldCounter) => oldCounter + 1);
    }, 2000);
  }

  return (
    <div>
      <h1>Hello React App World!</h1>
      Counter: {counter}
      <button onClick={changeCounter}>Increase Counter</button>
    </div>
  );
}

export default App;
