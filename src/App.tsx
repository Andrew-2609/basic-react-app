import { useEffect, useState } from "react";
import "./App.css";
import api from "./services/api";

function App() {

  const [username, setUsername] = useState("Andrew-2609");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // **using localStorage**
    // const localStorageUserData = localStorage.getItem("@basic-react-app/gitHubUserData");

    const sessionStorageData = sessionStorage.getItem("@basic-react-app/gitHubUserData");

    setUserData(JSON.parse(sessionStorageData) || {});
  }, []);

  async function getUserGitHubData() {
    const { data } = await api.get(username);

    // **using localStorage**
    // localStorage.setItem("@basic-react-app/gitHubUserData", JSON.stringify(data));

    sessionStorage.setItem("@basic-react-app/gitHubUserData", JSON.stringify(data));

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
