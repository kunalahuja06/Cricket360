import React from 'react'
import { Container } from '@mui/material'
import './styles.css'

function CreatePost() {
    const handleSubmit=()=>{

    }
  return (
    <Container maxWidth="md" className="container">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="userInput">
          <label htmlFor="title">Title</label>
          <input type="text" />
        </div>
        <div className="userInput">
          <label htmlFor="body">Blog Content</label>
          <input type="text" />
        </div>
      </form>
    </Container>
  );
}

export default CreatePost