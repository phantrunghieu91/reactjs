import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Header = () => {
    const userLogined = useSelector(state => state.loginReducer.userLogined);

    return (
        <header className="container-fluid p-0">
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">
                        Demo redux
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                {
                                    !userLogined.email ? (<Link to='/sign-in' className="nav-link" aria-current="page">Sign in</Link>) : (<Link to='/users' className="nav-link" aria-current="page">Users</Link>)
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}