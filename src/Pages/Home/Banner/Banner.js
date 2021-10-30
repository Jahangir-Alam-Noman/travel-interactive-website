import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner ">
            <h1 className="banner_vacation fw-bolder"> <span >Enjoy Vacation With </span> <span className="banner_travel">V-Travel</span></h1>
            <h3>Travel to the any corner of the world, without going around in circles.</h3>
            <Link to="/login">
                <button type="button" className="btn btn-outline-warning mt-5 ">Book A Tour</button>
            </Link>
        </div>
    );
};

export default Banner;