import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyBooked.css';

const MyBooked = () => {
    const [load, setLoad] = useState(false);
    const { user, isLoading } = useAuth();
    const email = user.email;
    // const email = "jahangir2km@gmail.com";

    const [myBooked, setMyBooked] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/booking/${email}`)
            .then(res => res.json())
            .then(data => setMyBooked(data))
    }, [load])

    if (isLoading) {
        return <Spinner animation="border" variant="light" />;
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure , You want to delete ?');
        if (proceed) {
            const url = `https://young-bastion-08130.herokuapp.com/manage/booked/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setLoad(true);
                        alert('Successfully deleted');
                        const remaining = myBooked.filter(pd => pd._id === id);
                        setMyBooked(remaining);
                    }

                })
        }
    }
    return (
        <div className="my_booked">
            <h2 className="fw-bolder">My Booking Package</h2>
            <div className="container px-5 ">
                <div className="row custyle">
                    <table className="table table-success  custab ">
                        <thead>
                            <tr>
                                <th className="d-none d-lg-block">SL</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th className="d-none d-lg-block">Package</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>

                        {
                            myBooked.map((booked, index) => <tr key={booked._id}>
                                <td className="d-none d-lg-block">{index === 0 ? index + 1 : index + 1}</td>
                                <td>{booked.name}</td>
                                <td>{booked.email}</td>
                                <td className="d-none d-lg-block">{booked?.package}</td>
                                <td className="text-center text-dark">
                                    <a onClick={() => handleDelete(booked._id)} className='btn btn-dark text-danger fw-bolder '> Delete</a>
                                    <button type="button" className="btn btn-outline-success">{booked.status}</button>


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