import React from "react";
import "./Login.css";
import Logo from "../assets/Discord-Logo.png";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";
import { signInWithRedirect } from "firebase/auth";

const Login = () => {
  const signIn = () => {
    signInWithRedirect(auth, provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={Logo} alt="Discord Logo" />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;
