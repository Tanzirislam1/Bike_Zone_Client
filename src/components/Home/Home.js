import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = ({handleDelete, isReload, setIsReload}) => {
    const [products, setProducts] = useState([]);

    /* set dependency for remove data */
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isReload]);

    return (
        <div className='container'>
            <h2>Our All Products: {products.length}</h2>
            <div className="products-container mt-5">
                {
                    products.map(product => <Product key={product._id} product={product} handleDelete={handleDelete} setIsReload={setIsReload}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;