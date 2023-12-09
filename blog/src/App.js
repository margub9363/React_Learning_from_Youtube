import "./App.css";
import "./style.css";
import ChildComponentWithInputBox from "./ChildComponentWithInputBox";
import { useRef, forwardRef } from "react";
function App() {
  let inputRef = useRef(null);

  function updateInput() {
    inputRef.current.value = 1000;
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  }

  return (
    <>
      <div className="App">
        <h1>This is the Parent Component</h1>
        <button onClick={updateInput}>
          Click this to update Child input box
        </button>
        <ChildComponentWithInputBox ref={inputRef} />
      </div>
    </>
  );
}
export default App;
