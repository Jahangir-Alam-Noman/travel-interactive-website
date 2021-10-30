import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageBooked.css';

const ManageBooked = () => {
    const [bookedPackages, setBookedPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manage')
            .then(res => res.json())
            .then(data => setBookedPackages(data))
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure , You want to delete ?');
        if (proceed) {
            const url = `http://localhost:5000/manage/${id}`;
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

    return (
        <div className="manage_booked">
            <div className="container">
                <div className="row">
                    <h2 className="pb-5 fw-bolder">Manage All Booked packages</h2>

                    <table className="table table-bordered  table-striped  table-hover custab ">
                        <thead>
                            <tr>
                                <th scope="col">SL</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookedPackages.map((booked, index) => <tr key={booked._id}>
                                    <td >{index === 0 ? index + 1 : index + 1}</td>
                                    <td>{booked.name}</td>
                                    <td>{booked.email}</td>
                                    <td >{booked.address}</td>
                                    <a onClick={() => handleDelete(booked._id)} className='btn btn-dark text-danger fw-bolder '> Delete</a>


                                    <button type="button" className="btn btn-outline-success">Pending</button>

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