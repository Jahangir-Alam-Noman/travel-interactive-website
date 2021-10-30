import React, { useEffect, useState } from 'react';
import './MyBooked.css';

const MyBooked = () => {
    const [myBooked, setMyBooked] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manage')
            .then(res => res.json())
            .then(data => setMyBooked(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure , You want to delete ?');
        if (proceed) {
            const url = `http://localhost:5000/manage/booked/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully deleted');
                        const remaining = myBooked.filter(pd => pd._id !== id);
                        setMyBooked(remaining);
                    }

                })
        }
    }
    return (
        <div className="my_booked">
            <h2 className="pb-5 fw-bolder">My Booked Packages</h2>
            <div className="container px-5 ">
                <div className="row custyle">
                    <table className="table table-success  custab ">
                        <thead>
                            <tr>
                                <th className="d-none d-lg-block">SL</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th className="d-none d-lg-block">Address</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>

                        {
                            myBooked.map((booked, index) => <tr key={booked._id}>
                                <td className="d-none d-lg-block">{index === 0 ? index + 1 : index + 1}</td>
                                <td>{booked.name}</td>
                                <td>{booked.email}</td>
                                <td className="d-none d-lg-block">{booked.address}</td>
                                <td className="text-center text-dark">
                                    <a onClick={() => handleDelete(booked._id)} className='btn btn-dark text-danger fw-bolder '> Delete</a>


                                </td>
                            </tr>)
                        }


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBooked;