import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import Login from "./components/Login";
import LoggedIn from "./components/LoggedIn";

function App() {
  // dummy data of users

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<LoggedIn />} />
      </Routes>
    </div>
  );
}

export default App;
