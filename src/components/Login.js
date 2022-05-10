import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/Login.css";

function Login() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  function changeUser(e) {
    setUser(e.target.value);
  }

  function formSubmit(e) {
    e.preventDefault();
    // we set both localStorage and sessionStorage
    localStorage.setItem("user", user);
    if (!localStorage.getItem("usersInSession")) {
      localStorage.setItem("usersInSession", JSON.stringify([user]));
    } else {
      const prevUsersInSession = JSON.parse(
        localStorage.getItem("usersInSession")
      );

      // check if the new sign in is already in the stored in localStorage (this is where we would have added the logic to drag focus to the tab with that particular username...) (we'll figure it out soon)
      if (prevUsersInSession.includes(user)) {
        alert("user already signed in");
        navigate("/login");
      } else {
        localStorage.setItem(
          "usersInSession",
          JSON.stringify([...prevUsersInSession, user])
        );
      }
      sessionStorage.setItem("user", user);
      navigate("/dashboard");
    }
  }

  return (
    <div className="contents">
      <div className="main-content">
        <h1 className="brand-name">BITMAMA</h1>

        <form className="form" onSubmit={formSubmit}>
          <div className="circle"></div>
          <div className="circle1"></div>
          <h1 className="form-h1">Login</h1>
          <h3 className="form-h3">Welcome</h3>
          <label className="label">Enter Username</label>
          <input
            className="first-input"
            type="text"
            placeholder="Username..."
            value={user}
            onChange={changeUser}
            required
          />
          <br />
          <input className="first-input2" type="submit" value="Log In" />
        </form>
      </div>
    </div>
  );
}

export default Login;
