import { useContext } from "react";
import { GlobalInfo } from "./App";
import App from "./App";
import SuperChild from "./SuperChild";
function OtherChild() {
  const { appColor } = useContext(GlobalInfo);
  // console.log(useContext(GlobalInfo));
  return (
    <>
      <h1 style={{ color: appColor }}>OtherChild Component</h1>
      {/* <SuperChild /> */}
    </>
  );
}

export default OtherChild;
