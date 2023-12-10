import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h1>Home Page</h1>
      <p>This About Page of our awesome Application </p>
      <p>And we are learning the React Aaplication</p>
      <br />
      <Link to="/"> Click here to Navigate to Home Page</Link>
      <br />
      <Link to="/user/Rahman/Sofware">Click to Go To Rahman User Page</Link>
      <br />
      <Link to="/user/Tannu/Mechanical">Click to Go To Tannu User Page</Link>
      <br />
    </>
  );
}

export default About;
