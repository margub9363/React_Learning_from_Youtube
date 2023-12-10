import { Link, useNavigate } from "react-router-dom";
import About from "./About";

function Home() {
  const navigate = useNavigate();
  function conditionalRendering(url) {
    if (url == "about") navigate("/about");
    else navigate("/filter");
  }
  return (
    <>
      <h1>Home Page</h1>
      <p>This Home Page of our awesome Application </p>
      <p>And we are learning the React Aaplication</p>
      <Link to="/about"> Click here to Navigate to About Page</Link>
      <br />
      <button onClick={() => conditionalRendering("filter")}>
        Navigate to Filter Page
      </button>
      <br />
      <button onClick={() => conditionalRendering("about")}>
        Navigate to About Page
      </button>
    </>
  );
}

export default Home;
