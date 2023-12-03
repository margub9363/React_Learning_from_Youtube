import { useState } from "react";

function Login() {
  const [userErrorFlag, setUserErrorFlag] = useState(false);
  const [passwordErrorFlag, setPasswordErrorFlag] = useState(false);

  const userInputHandler = (e) => {
    if (e.currentTarget.value != "Tannu") {
      setUserErrorFlag(true);
    } else {
      setUserErrorFlag(false);
    }
  };

  const passwordInputHandler = (e) => {
    if (e.currentTarget.value != "Tannu@123") {
      setPasswordErrorFlag(true);
    } else {
      setPasswordErrorFlag(false);
    }
  };

  const submitHandler = (e) => {
    console.log("******");
  };

  return (
    <div>
      <h1>FormValidation</h1>
      User : <input type="text" onChange={userInputHandler} /> <br />{" "}
      {userErrorFlag ? <h1> Value Mismatch </h1> : <span></span>}
      Password : <input type="text" onChange={passwordInputHandler} />{" "}
      {passwordErrorFlag ? <h1> Value Mismatch </h1> : <span></span>}
      <br />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default Login;
