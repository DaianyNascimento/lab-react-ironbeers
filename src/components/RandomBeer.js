import Navbar from './Navbar';

function RandomBeer({ randomBeer }) {
    return (
        <div>
            <Navbar />
            <div>
                <img src={randomBeer.image_url} alt={randomBeer.name} width={80} />
                <h2>{randomBeer.name}</h2>
                <p>{randomBeer.tagline}</p>
                <p>{randomBeer.first_brewed}</p>
                <p>{randomBeer.attenuation_level}</p>
                <p>{randomBeer.description}</p>
                <p>{randomBeer.contributed_by}</p>
            </div>
        </div>
    );
}

export default RandomBeer;