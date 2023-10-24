import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    const [error, setError] = useState();
    const { createUser } = useContext(AuthContext);
    const [accept, setAccept] = useState(false);
    useTitle('Register')

    const handleWithRegister = (event) => {
        event.preventDefault();
        const registerForm = event.target;
        const name = registerForm.name.value;
        const photo = registerForm.photo.value;
        const email = registerForm.email.value;
        const password = registerForm.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleAccepted =event=>{
        setAccept(event.target.checked);
    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Register Your Account</h3>
            <Form onSubmit={handleWithRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>className</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Photo Url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link to='/terms'>Terms and condition</Link></>} />
                </Form.Group>
                <Button variant="primary" disabled={!accept} type="submit">
                    Register
                </Button><br />
                <Form.Text className='text-success'>
                    Already  Have an account ? <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className='text-success'>

                </Form.Text>
                <Form.Text className='text-danger'>

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;