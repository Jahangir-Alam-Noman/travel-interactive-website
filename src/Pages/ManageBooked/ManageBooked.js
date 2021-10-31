import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageBooked.css';

const ManageBooked = () => {
    const [load, setLoad] = useState(false);
    const [bookedPackages, setBookedPackages] = useState([]);
    useEffect(() => {
        fetch('https://young-bastion-08130.herokuapp.com/manage')
            .then(res => res.json())
            .then(data => setBookedPackages(data))
    }, [load])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure , You want to delete ?');
        if (proceed) {
            const url = `https://young-bastion-08130.herokuapp.com/manage/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully deleted');
                        const remaining = bookedPackages.filter(pd => pd._id !== id);
                        setBookedPackages(remaining);
                    }

                })
        }
    }

    const handleStatus = id => {
        axios.put(`http://localhost:5000/manage/status/${id}`, {})
            .then(res => {
                if (res.data.acknowledged) {
                    setLoad(true);
                    alert('Booking approved');
                }
            })
    }

    return (
        <div className="manage_booked">
            <div className="container">
                <div className="row">
                    <h2 className="fw-bolder">Manage All Booking packages</h2>

                    <table className="table table-bordered  table-striped  table-hover custab ">
                        <thead>
                            <tr>
                                <th scope="col">SL</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Package</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookedPackages.map((booked, index) => <tr key={booked._id}>
                                    <td  >{index === 0 ? index + 1 : index + 1}</td>
                                    <td>{booked.name}</td>
                                    <td>{booked.email}</td>
                                    <td >{booked?.package}</td>
                                    <a onClick={() => handleDelete(booked._id)} className='btn btn-dark text-danger fw-bolder '> Delete</a>


                                    <button onClick={() => handleStatus(booked._id)} type="button" className="btn btn-outline-success">{booked.status}</button>

                                </tr>)
                            }

                        </tbody>
                    </table>







                    {/* <tbody>

                     



                        </tbody> */}



                </div>

            </div>
        </div>
    );
};

export default ManageBooked;