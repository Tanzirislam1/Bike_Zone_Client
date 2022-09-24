import React from 'react';
import UpdateModal from '../../components/UpdateModal/UpdateModal';

const Product = ({ product, handleDelete, setIsReload, isReload }) => {
    const { _id, productName, price, img } = product || {};
    return (
        <div className='container'>
            <div className="card h-100">
                <img className='w-100 h-75 img-fuild' src={img} alt="img" />
                <div className="card-body">
                    <h4>{productName}</h4>
                    <p>Price: ${price}</p>
                    <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
                    {/* <button>Update</button> */}
                    <div type='button' className='btn btn-primary text-light ms-2'>
                        <UpdateModal id={_id} setIsReload={setIsReload} isReload={isReload}></UpdateModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;