import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile";
import Login from "./Login";
import Child1 from "./Child1";

function App() {
  const getData = () => {
    alert("Get Data Method from App.js is called");
  };

  return (
    <div>
      <h1> This is the main App Component</h1>
      -----------------------
      <Child1 getData={getData} />
    </div>
  );
}
export default App;
