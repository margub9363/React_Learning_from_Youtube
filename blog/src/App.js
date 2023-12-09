import "./App.css";
import "./style.css";
import style from "./cusom.module.css";
function App() {
  return (
    <div>
      This is the main App Component and we are wroking on Different style sheet
      <h1 className="primary">
        Style Type 1 in React.js -- through stylesheet
      </h1>
      <h1 style={{ color: "red", backgroundColor: "black" }}>
        Style Type 2 in React.js -- Inline
      </h1>
      <h1 className={style.success}>Style3 in React.js -- Custom Module.css</h1>
    </div>
  );
}
export default App;
