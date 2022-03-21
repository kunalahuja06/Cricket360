import React, { useState } from "react";
import "./styles.css";
import { useAuth } from "../authContext";
import { useNavigate } from "react-router-dom";

function Login() {
 const navigate = useNavigate();
 const [, dispatch] = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    const res = await response.json();
    console.log(res.user.username)
    if(res.user){
      dispatch({
        type: "LOGIN",
        payload: res.user,
        username: res.user.username,
      });
      localStorage.setItem("jwtToken", res.token);
      localStorage.setItem("username", res.user.username);
      navigate("/");
    }
  };

  return (
    <>
      <div className="bg-image"></div>
      <div className="bg-image"></div>
      <div className="container">
        <h1 style={{ color: "#0A1929" }}>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="userInput">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="userInput">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submitButton">
            Log in
          </button>
          <a href="/register" className="redirect">Don't have an account? Register</a>
        </form>
      </div>
    </>
  );
}

export default Login;
