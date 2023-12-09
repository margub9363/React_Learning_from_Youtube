import "./App.css";
import User from "./User";
import "./style.css";
import { Button } from "react-bootstrap";
function App() {
  function alertAtParent(data) {
    alert("Welcome : " + data);
  }
  return (
    <>
      This is Parent Component
      <User property={alertAtParent} />
    </>
  );
}
export default App;
