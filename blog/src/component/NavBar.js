import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink className="nav-bar-NavLink " style={{ color: "red" }} to="/">
            Home Page{" "}
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-NavLink " to="/about">
            About Page{" "}
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-NavLink " to="/contact">
            Contact{" "}
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-NavLink " to="/Login">
            Login{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
