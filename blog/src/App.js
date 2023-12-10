import "./App.css";
import NotFound from "./component/404NotFound";
import About from "./component/About";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import User from "./component/User";
import "./style.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:name/:profession" element={<User />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
