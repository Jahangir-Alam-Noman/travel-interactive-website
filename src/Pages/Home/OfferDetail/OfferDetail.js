import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './OfferDetail.css';

const OfferDetail = () => {
    const { serviceId } = useParams();

    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    const ExactIteam = details.filter(td => td._id == serviceId);
    return (
        <div className="py-5 details ">
            <div className="row overlay">
                <h2>Service Details</h2>
                <p> <Link to="/home"> <span className="text-custom pe-2"> Home </span></Link>
                    <span className="text-custom">Service Details</span>
                </p>

            </div>
            <div className="row py-5 my-5 px-5 container  ">
                <div className="col-12 col-md-6 px-5 col-lg-6">
                    <img src={ExactIteam[0]?.img} className="img-fluid pt-3" alt="" />
                </div>
                <div className="col-12  col-md-6 pt-5 mt-5 px-5  col-lg-6">
                    <div>
                        <h2 className="details_headline">{ExactIteam[0]?.name}</h2>
                        <h5> {ExactIteam[0]?.description}</h5>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default OfferDetail;