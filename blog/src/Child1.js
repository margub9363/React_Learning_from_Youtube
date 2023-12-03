import NestedChild from "./NestedChild";

function Child1(props) {
  return (
    <div>
      This is the Child1 Component
      <button onClick={props.getData}>
        Click To Trigger Alert From Parent Component
      </button>
      <br />
      ----------------
      <NestedChild props={props.getData} />
    </div>
  );
}

export default Child1;
