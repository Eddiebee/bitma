import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import "../components/LoggedIn.css";

function LoggedIn() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("usersInSession"));

  useEffect(() => {
    // we check if there's a user in our sessionStorage (when the user opens a new tab)
    // if we don't have any we fallback to the last user (which we have in localStorage) coool ;)
    if (Object.values(localStorage) === 0) {
      setUser(sessionStorage.getItem("user"));
    } else {
      setUser(localStorage.getItem("user"));
    }
  }, []);

  return (
    <div className="main-content">
      <div className="login-content">
        {user ? (
          <h1 className="login-h1">Welcome {user}</h1>
        ) : (
          <h1>Loading....</h1>
        )}

        {/* display users in session */}
        <h4>Active users on browser</h4>
        {users?.map((user) => (
          <div key={nanoid()}>
            <p>{user}</p>
          </div>
        ))}

        <button className="first-button" onClick={() => navigate("/login")}>
          Log Out
        </button>

        <button className="second-button" onClick={() => navigate("/login")}>
          Sign in with a different user
        </button>
      </div>
    </div>
  );
}

export default LoggedIn;
