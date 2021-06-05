import React from "react"
import Signup from "./Signup";
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from 'Dashboard.js'
import Login from 'Login.js'
function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight:"100vh"}}
      >
      <div style={{maxWidth:"600px"}}><Signup /></div>
      <AuthProvider>
        <Switch>
        <Route path="/" component={Dashboard}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </AuthProvider>
    </Container>
      
  )
}

export default App;
