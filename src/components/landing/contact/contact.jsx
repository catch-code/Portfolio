import { useState } from 'react'
import emailjs from '@emailjs/browser'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import "./contact.scss"

const Contact = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        emailjs.send("service_2lr2xrh", "template_aaobn4i", {
            subject: subject,
            from_email: email,
            from_name: firstName + " " + lastName,
            message: message,
        }, '_QRPhS7D9xrF_UoI7')
            .then(alert("Email sent successfully"))
            .catch(err => alert(err.text))
    }

    return (
        <div className='container'>
        <div id="contact" className="contact p-5 my-5 d-flex bg-white flex-column align-items-center">
            <h3>We are Open for talking</h3>
            <h4>Fill the form below</h4>
            <Form
                className="row contact-form m-1 p-1 d-flex flex-column align-items-center"
                onSubmit={handleSubmit}>
                <Form.Group className=" col-sm-12 my-2 p-1 d-flex justify-content-between" controlId='nameController'>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)} />
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)} />
                </Form.Group>
                <Form.Group className="col-sm-12 my-2 p-1 d-flex justify-content-between" controlId='subjectController'>
                    <Form.Control
                        required
                        type="Subject"
                        placeholder="Subject"
                        value={subject}
                        onChange={e => setSubject(e.target.value)} />
                    <Form.Control
                        required
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="my-2 p-1" controlId='messageController'>
                    <Form.Control
                        required
                        as="textarea"
                        placeholder="Enter your message"
                        value={message}
                        onChange={e => setMessage(e.target.value)} />
                </Form.Group>
                <Button
                    className='mt-4 fs-sm-6'
                    type="submit">
                    Send message
                </Button>
            </Form>
        </div>
        </div>
    )
}

export default Contact
