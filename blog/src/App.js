import "./App.css";
import Child from "./Child";
import { createContext, useState } from "react";
import OtherChild from "./OtherChild";
export const GlobalInfo = createContext();
function App() {
  const [color, setColor] = useState("red");
  const [day, setDay] = useState("Saturday");
  const getDay = (item) => {
    console.log(item);
    setDay(item);
  };
  return (
    <>
      <GlobalInfo.Provider value={{ appColor: color, getDay: getDay }}>
        <h1>App Component. Today is {day}</h1>
        <Child />
        <OtherChild />
      </GlobalInfo.Provider>
    </>
  );
}

export default App;
