import { useState } from "react";
import "./App.css";
import api from "./services/api";

function App() {

  const [username, setUsername] = useState("Andrew-2609");
  const [userData, setUserData] = useState({});

  async function getUserGitHubData() {
    const { data } = await api.get(username);

    setUserData(data);
  }

  return (
    <div style={{ padding: 12 }}>
      <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      <button onClick={() => getUserGitHubData()}>Search user</button>
      <p>Name: {userData.name}</p>
      <p>Company: {userData.company}</p>
    </div>
  );

}

export default App;
