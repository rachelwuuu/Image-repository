import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"
import {AuthContext} from "../contexts/AuthContext.js"
export default function UpdateProfile() {
    const emailRef=useRef();
    const passwordRef=useRef();
    const passwordConfirmRef=useRef();
    const {currentUser, updatePassword, updateEmail} =useAuth()
    const [error, setError] = useState("")
    const {signup} =useAuth()
    const [loading, setLoading] = useState(false)
    const history=useHistory()
    async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password needs to match")
        }
        const promises=[]
        if (emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }
        Promise.all(promises).then(()=>{
            history.push("/")
        })
        .catch(()=>{
            setError("Failed to update.")
        })
        .finally(()=>{
            setLoading(false)
        })
        try {
            setError("")
            setLoading(true)
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
                    <h2 className="text-center">Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group id="password-confirmation">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required/>
                        </Form.Group>
                        <Button className="w-100" disabled={loading} type="submit">Update</Button>
                    </Form>
                    
                </Card.Body>
            </Card>
            <div className="text-center">
                <Link to="/">Cancel</Link>
            </div>
        </>
    )
}
