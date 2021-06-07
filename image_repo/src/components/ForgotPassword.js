import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"
import {AuthContext} from "../contexts/AuthContext.js"
export default function Signup() {
    const emailRef=useRef();
    const [error, setError] = useState("")
    const {resetPasswordEmail} =useAuth()
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    async function handleSubmit(e){
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await resetPasswordEmail(emailRef.current.value)
            setMessage("Sent password confirmation email.")
        }catch{
            setError("Failed to reset password")
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
                    {message && <Alert variant="success">{message}</Alert>}
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
