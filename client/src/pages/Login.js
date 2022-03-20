import React, { useState } from "react";
import "./styles.css";

function Register() {
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
    });
    const data = response.json();
    console.log(data);
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
              type="text"
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

export default Register;
