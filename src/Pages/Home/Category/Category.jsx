import React from 'react';
import Header from '../../Share/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Share/Footer/Footer';
import { Outlet, useParams } from 'react-router-dom';
import RightNav from '../../Share/RightNav/RightNav';

const Category = () => {
    const {id}=useParams();
    return (
        <div>
            <h2>this is category:{id}</h2>
        </div>
    );
};

export default Category;