import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

const API_URL = "http://localhost:5000";

function App() {
  const [user, setUser] = useState({});

  const googleSignInHandler = async () => {
    await Axios.get(`${API_URL}/v1/auth/google`);
    const loggedUser = await Axios.get(`${API_URL}/v1/user`);
    console.log({loggedUser})
    setUser(loggedUser);
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={googleSignInHandler}>Sign in with Google</button>
        <h2>User ID: {user && user.googleID}</h2>
      </header>
    </div>
  );
}

export default App;
