import React from "react"
import Signup from "./Signup";
import { Container } from "react-bootstrap"
function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
    style={{minHeight:"100vh"}}
    >
      <div style={{maxWidth:"600px"}}><Signup /></div>
      
    </Container>
      
  )
}

export default App;
