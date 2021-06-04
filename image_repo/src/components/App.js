import React from "react"
import Signup from "./Signup";
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext";
function App() {
  return (
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight:"100vh"}}
      >
        <div style={{maxWidth:"600px"}}><Signup /></div>
        
      </Container>
    </AuthProvider>
    
      
  )
}

export default App;
