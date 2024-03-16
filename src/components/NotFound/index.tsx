import './style.css';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Not Found</h2>
            <Link to="/">Go to Home</Link>
        </div>
    )
}
