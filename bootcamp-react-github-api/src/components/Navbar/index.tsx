
import './styles.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <nav className="main-nav">
        <Link to="/" className='title-link-content'>
            <h1>Github API</h1>
        </Link>
    </nav>
    );
}

export default Navbar;
