import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [user, setUser] = useState({});

  const googleSignInHandler = async () => {
    try {
      const loggedUser = await axios.get("/v1/user");
      const data = loggedUser.data;
      console.log("loggedUser: ", data);
      setUser(data);
    } catch (error) {
      console.log(error.messge);
    }
  };

  const getCookie = (cName) => {
    console.log('main cookie: ', document.cookie)
    const cookies = document.cookie.split(";")
    const cookie = cookies.map(cookie => cookie === cName)[0]
    console.log({cookies, cookie})
    return cookie
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={googleSignInHandler}>Sign in with Google</button>
        <a href="/v1/auth/google"> Sign in with Google</a>
        <h2>User ID: {user && user.googleID}</h2>
        {
          getCookie("surveyorMH") && "yes user is logged in"
        }
      </header>
    </div>
  );
}

export default App;
