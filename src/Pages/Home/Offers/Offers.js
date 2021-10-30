import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Offer from '../Offer/Offer';
import './Offers.css';

const Offers = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="services container pt-5 mt-4">
                <h2 className="fw-bolder pt-2 pb-2">Offers</h2>
                <h4 className="text-dark  pb-5">What Package We Offer</h4>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services.map(service => <Offer
                            key={service._id}
                            service={service}
                        ></Offer>)
                    }
                </Row>


            </div>


        </div>
    );
};

export default Offers;