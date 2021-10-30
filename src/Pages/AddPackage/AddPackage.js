import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddPackage.css';

const AddPackage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        axios.post('https://young-bastion-08130.herokuapp.com/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Added');
                    reset();
                }
            })
    };
    return (
        <div className="add_package">
            <h2 className="pb-5">Please add a new package</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })}
                    placeholder="name" />
                <textarea {...register("description")} placeholder="description" /> <br />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                {/* <input type="submit" /> */}
                {errors.name && <span className="text-danger">Your name maximum 20 letters</span>}
                <input className="btn btn-primary" type="submit" value="Submit" />

            </form>

        </div>
    );
};

export default AddPackage;