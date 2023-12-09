import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h1>Home Page</h1>
      <p>This About Page of our awesome Application </p>
      <p>And we are learning the React Aaplication</p>
      <Link to="/"> Click here to Navigate to Home Page</Link>
    </>
  );
}

export default About;
