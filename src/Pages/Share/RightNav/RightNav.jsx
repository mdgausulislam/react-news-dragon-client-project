import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from "../../../assets/bg.png"

const RightNav = () => {
    return (
        <div className='block'>
            <h3 className='mt-4'>Login With</h3>
            <Button className='mb-3' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>
            <div>
                <h3 className='mt-4'>Find us on</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='position-relative'>
                <img className='w-100' src={bg} alt="" />
                <div className='position-absolute top-0 p-5'>
                    <h1 className='text-white'>Create an Amazing Newspaper</h1>
                    <p className='text-white fs-5 mt-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className='px-3 fw-bold fs-2 mt-4' variant="danger">Danger</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;