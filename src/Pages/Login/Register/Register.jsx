import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Register = () => {
    const {createUser}=useContext(AuthContext);

    const handleWithRegister=(event)=>{
        event.preventDefault();
        const registerForm=event.target;
        const name=registerForm.name.value;
        const photo=registerForm.photo.value;
        const email=registerForm.email.value;
        const password=registerForm.password.value;
        console.log(name,photo,email,password);
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
                    <Form.Check type="checkbox" name='accept' label="Accept terms and condition" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
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