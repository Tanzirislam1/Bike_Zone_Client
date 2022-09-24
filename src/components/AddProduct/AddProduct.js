import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };

    return (
        <div className='container text-center'>
            <h2>Add Your Product</h2>
            <form className='d-flex flex-column w-50 mx-auto mt-5' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Product Name' {...register("productName")} />
                <input type="number" placeholder='Price' {...register("price")} />
                <input type="url" placeholder='img' {...register("img")} />
                <input type="submit" value="Add product" />
            </form>
        </div>
    );
};

export default AddProduct;