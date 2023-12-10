import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Protected(props) {
  const navigate = useNavigate();
  useEffect(() => {
    let isLoggedIn = localStorage.getItem("loggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  });
  const { Component } = props;

  return <Component />;
}

export default Protected;
