import { useContext } from "react";
import { GlobalInfo } from "./App";
import App from "./App";
function SuperChild() {
  const { appColor, getDay } = useContext(GlobalInfo);
  // console.log(useContext(GlobalInfo));
  return (
    <>
      <h1 style={{ color: appColor }}>SuperChild Component</h1>
      <button
        onClick={() => {
          getDay("Sunday");
        }}
      >
        Click me To get Sunday
      </button>
    </>
  );
}

export default SuperChild;
