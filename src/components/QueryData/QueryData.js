import React from 'react';
import { Link } from 'react-router-dom';
import UpdateModal from '../UpdateModal/UpdateModal';

const QueryData = ({ queryData, handleDelete, isReload, setIsReload }) => {
    return (
        <div>
            <h2>Query Search Data: {queryData.length}</h2>
            {
                queryData.map(query => <ul key={query._id}>
                    <li>
                        <div className="card h-100 w-50 mx-auto">
                            <img className='w-100 h-75 img-fuild' src={query.img} alt="img" />
                            <div className="card-body">
                                <h4>{query.productName}</h4>
                                <p>Price: ${query.price}</p>
                                <button className='btn btn-danger' onClick={() => handleDelete(query._id)}>Delete</button>
                                <div type='button' className='btn btn-primary text-light ms-2'>
                                    <UpdateModal id={query._id} setIsReload={setIsReload} isReload={isReload}></UpdateModal>
                                </div>
                                <Link className='btn btn-primary ms-2' to='/home'>Go Home</Link>
                            </div>
                        </div>
                    </li>
                </ul>)
            }
        </div>
    );
};

export default QueryData;