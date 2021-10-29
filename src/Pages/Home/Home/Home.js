import React from 'react';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <About></About>

        </div>
    );
};

export default Home;