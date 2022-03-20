import React, { useState } from 'react'
import './styles.css'

function Register() {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [confirmpassword, setConfirmPassword] = useState();
    const [username,setUsername]=useState()
    

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const response = await fetch("http://localhost:5000/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            confirmpassword,
            username,
          }),
        });
        const data=response.json()
        console.log(data)
    }   

  return (
    <div className="container">
      <h1 style={{ color: "#0A1929" }}>Register</h1>
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
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="enter Username..."
            onChange={(e) => setUsername(e.target.value)}
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
        <div className="userInput">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="confirm your password..."
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submitButton">
          Register
        </button>
        <a href="/login" className='redirect'>Already have an account? Login</a>
      </form>
    </div>
  );
}

export default Register