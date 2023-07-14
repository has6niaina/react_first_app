import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="nog">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Retourner à la page d'acceuil...</Link>
        </div>
    );
}

export default NotFound;