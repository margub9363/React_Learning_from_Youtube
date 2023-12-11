import "./App.css";
import NotFound from "./component/404NotFound";
import About from "./component/About";
import Channel from "./component/Channel";
import Company from "./component/Company";
import Contact from "./component/Contact";
import Filter from "./component/Filter";
import Home from "./component/Home";
import Login from "./component/Login";
import NavBar from "./component/NavBar";
import Other from "./component/Other";
import Protected from "./component/Protected";
import User from "./component/User";
import "./style.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  const [count, setCount] = useState(1);
  function udpateCounter() {
    for (let i = 0; i < 5; i++) {
      setCount((previoiusState) => previoiusState + 1);
    }
  }
  return (
    <>
      <div className="App">
        <h1>{count}</h1>
        <button onClick={udpateCounter}>Click Me to Update Counter</button>
      </div>
    </>
  );
}

export default App;
