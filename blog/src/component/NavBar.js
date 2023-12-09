import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home Page </Link>
        </li>
        <li>
          <Link to="/about">About Page </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
