import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Offer.css';

const Offer = ({ service }) => {
    const { name, img, description, _id } = service;
    return (
        <div className="service text-center">
            <Col>
                <Card >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-dark  fw-bolder">{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 130)}
                        </Card.Text>
                        <Link to={`/service/${_id}`}>
                            <button type="button" className="btn btn-outline-info">More Details</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Offer;