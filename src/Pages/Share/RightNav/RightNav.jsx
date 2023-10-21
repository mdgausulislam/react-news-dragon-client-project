import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from "../../../assets/bg.png"

const RightNav = () => {
    return (
        <div className='block'>
            <h3>Login With</h3>
            <Button className='mb-3' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>
            <div>
                <h3>Find us on</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;