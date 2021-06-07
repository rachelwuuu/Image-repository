import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"
import {AuthContext} from "../contexts/AuthContext.js"
export default function Signup() {
    const emailRef=useRef();
    const passwordRef=useRef();
    const [error, setError] = useState("")
    const {signup} =useAuth()
    const [loading, setLoading] = useState(false)
    const history=useHistory()
    async function handleSubmit(e){
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            //history.push("/")//push an entry in the session's history stack
        }catch{
            setError("Failed to create account. Password needs to be at least 6 characters")
            //Make this into a separate error message later
        }
        setLoading(false)
    }
    
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center">Reset Password</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        
                        <Button w-100 disabled={loading} type="submit">Submit</Button>
                    </Form>
                    
                </Card.Body>
            </Card>
            <div className="text-center">
                Log in <Link to="/login">here</Link>.
            </div>
        </>
    )
}
