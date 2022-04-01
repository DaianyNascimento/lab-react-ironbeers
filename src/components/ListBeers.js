import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function ListBeers({ allBeers }) {
    return (
        <div>
            <Navbar />
            <h1>List Beers</h1>
            {allBeers.map(({ image_url, name, tagline, contributed_by, _id }, index) => {
                return (
                    <div>
                        <img src={image_url} alt={name} width={80} />
                        <h2>{name}</h2>
                        <p>{tagline}</p>
                        <h3>{contributed_by}</h3>
                        <Link to={`/beers/${_id}`}>{name}</Link>
                    </div>
                );
            })}
        </div >
    );
}

export default ListBeers;