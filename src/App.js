import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {

  const [showList, setShowList] = useState(true);

  return (
    <div>
      <h1>Hello React App World!</h1>
      {showList && <List />}
      <br />
      <button onClick={() => setShowList((oldShowList) => !oldShowList)}>Unmount List</button>
    </div>
  );
}

export default App;
