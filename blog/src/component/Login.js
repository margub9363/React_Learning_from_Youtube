function Login() {
  function submitHandler(e) {
    localStorage.setItem("loggedIn", true);
  }
  return (
    <div>
      <div>
        User Name:
        <input type="text" />
      </div>
      <div>
        Password: <input type="password" />
      </div>
      <dib>
        <button onClick={submitHandler}>Submit</button>
      </dib>
    </div>
  );
}

export default Login;
