import { forwardRef } from "react";
function ChildComponentWithInputBox(props, ref) {
  return (
    <>
      <h1>This is the Child Component</h1>
      <input type="text" ref={ref} />
    </>
  );
}

export default forwardRef(ChildComponentWithInputBox);
