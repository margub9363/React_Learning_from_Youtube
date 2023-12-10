import { Link } from "react-router-dom";

function NotFound() {
  return (
    <h1>
      Error Code 400. Page not NotFound
      <Link to="/">Click to Naviagte to Home Page</Link>
    </h1>
  );
}

export default NotFound;
