import "./App.css";
import "./style.css";
import ChildComponentWithInputBox from "./ChildComponentWithInputBox";
import { useRef, forwardRef, useState } from "react";
function App() {
  return (
    <>
      <div className="App">
        <h1>HOC</h1>
        <HocRed />
        <HocGreen />
      </div>
    </>
  );
}

function HocRed() {
  return (
    <div style={{ background: "red" }}>
      <Counter />
    </div>
  );
}

function HocGreen() {
  return (
    <div style={{ background: "green" }}>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update
      </button>
    </div>
  );
}

export default App;
