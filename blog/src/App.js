import "./App.css";
import NotFound from "./component/404NotFound";
import About from "./component/About";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
