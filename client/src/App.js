import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import { useAuth } from "./authContext";

function App() {
  const [{user,username},dispatch]=useAuth();
  const Error=()=>{
    return(
      <>
      <h1>You don't have access to this page</h1>
      <a href="/">Back to home</a>
      </>
    )
  }
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createpost" element={(user && username==='KunalAhuja')?<CreatePost/>:<Error/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
