import "./App.css";
import NotFound from "./component/404NotFound";
import About from "./component/About";
import Channel from "./component/Channel";
import Company from "./component/Company";
import Contact from "./component/Contact";
import Filter from "./component/Filter";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Other from "./component/Other";
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
          <Route path="/filter" element={<Filter />} />
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
          </Route>
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
