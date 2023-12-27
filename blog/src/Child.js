import { useContext } from "react";
import { GlobalInfo } from "./App";
import App from "./App";
import SuperChild from "./SuperChild";
function Child() {
  const { appColor } = useContext(GlobalInfo);
  // console.log(useContext(GlobalInfo));
  return (
    <>
      <h1 style={{ color: appColor }}>Child Component</h1>
      <SuperChild />
    </>
  );
}

export default Child;
