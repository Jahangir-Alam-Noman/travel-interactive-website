import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';
import './Home.css';

const Home = () => {
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="light" />;
    }
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <About></About>

        </div>
    );
};

export default Home;