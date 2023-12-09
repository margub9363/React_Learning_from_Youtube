import "./App.css";
import "./style.css";
import { Button } from "react-bootstrap";
import { useState, useMemo } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const mutiCountMemo = useMemo(
    function multicount() {
      console.warn("multicount");
      return count * 5;
    },
    [count]
  );

  return (
    <>
      <div className="App">
        <h1>Use Memo Hook in React</h1>
        <h2>Count :{count}</h2>
        <h2>item : {item}</h2>
        <h2>{mutiCountMemo}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Update Count
        </button>
        <button
          onClick={() => {
            setItem(item * 10);
          }}
        >
          Update Item
        </button>
      </div>
    </>
  );
}
export default App;
