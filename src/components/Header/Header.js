import { Link, useNavigate } from 'react-router-dom';


const Header = ({ handleQuerySearch }) => {
    const navigate = useNavigate();
    const handleNavigateDataQuery = () => {
        navigate('/dataquery');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand text-white" as={Link} href="/home" >Biker Zone</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className='nav-link text-light' to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link text-light' to="/add/product">Add Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link text-light' to="/dataquery">Query data</Link>
                        </li>
                    </ul>
                    <form onSubmit={handleQuerySearch} className="d-flex">
                        <input className="form-control me-2 btn-outline-dark" type="text" placeholder="Query Search" aria-label="Search"
                            name="queryData" />
                        <input className='btn btn-outline-dark' onClick={handleNavigateDataQuery} type="submit" value="search" />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;