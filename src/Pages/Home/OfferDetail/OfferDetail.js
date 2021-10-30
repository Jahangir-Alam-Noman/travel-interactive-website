import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './OfferDetail.css';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const OfferDetail = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();

    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/packages/${serviceId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        axios.post(`http://localhost:5000/packages/${serviceId}`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Booked');
                    reset();
                }
            })
    };
    return (
        <div className="py-5 details ">
            <div className="row overlay">
                <h2>Package Details</h2>
                <p> <Link to="/home"> <span className="text-custom pe-2"> Home </span></Link>
                    <span className="text-custom">Package Details</span>
                </p>
            </div>
            <div className="row py-5 my-5 px-5 container  ">
                <div className="col-12 col-md-6 px-5 col-lg-6">
                    <img src={details?.img} className="img-fluid pt-3" alt="" />
                    <h2 className="details_headline">{details?.name}</h2>
                    <h5 className="text-warning fw-bolder">Price : $ {details?.price}</h5>
                    <p className="text-start"> {details?.description} .</p>
                </div>
                <div className="col-12  col-md-6   col-lg-6">
                    <div className="book_package">
                        <h2 className="pb-5 pt-3">Package Booking</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })}
                            />
                            <input defaultValue={user?.email}  {...register("email")} placeholder="Email" />
                            <textarea {...register("address", { required: true })} className="description" placeholder="Address" /> <br />
                            <input defaultValue={details?.name}  {...register("package")} placeholder="booking Package" />
                            {/* <input defaultValue={details.name} {...register("packageName")} /> */}
                            {/* <input defaultValue={details.name}  {...register("bookedPackage")} /> */}
                            {errors.address && <span className="text-danger">This field is required</span>}

                            <input className="btn btn-primary" type="submit" value="Place Booking" />

                        </form>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default OfferDetail;