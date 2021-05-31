import React, {useRef} from 'react'
import {Form, Button, Card} from 'react-bootstrap'

export default function Signup() {
    const emailRef=useRef();
    const passwordRef=useRef();
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center">Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <Button type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="text-center">
                Have you got an account before? Log in here. Commeeeeeeeeeeeeeeeeeeeeeeee
            </div>
        </>
    )
}
