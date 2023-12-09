import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <p>This Home Page of our awesome Application </p>
      <p>And we are learning the React Aaplication</p>
      <Link to="/about"> Click here to Navigate to About Page</Link>
    </>
  );
}

export default Home;
