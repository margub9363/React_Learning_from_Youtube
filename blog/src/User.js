function User(props) {
  let name = "Rahman";
  return (
    <>
      <div>This is the Child Component</div>;
      <button onClick={() => props.property(name)}>
        Click to pass data to Parent Component
      </button>
      ;
    </>
  );
}

export default User;
