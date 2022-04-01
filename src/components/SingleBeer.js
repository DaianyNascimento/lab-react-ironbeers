import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

function SingleBeer() {
    const singleBeer = useParams();
    const [beer, setBeer] = useState([]);
    const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

    useEffect(() => {
        console.log(singleBeer);
        if (!singleBeer.id) return;

        const controller = new AbortController();
        const signal = controller.signal;
        async function fetchSingleBeer() {
            try {
                const response = await fetch(
                    `${apiURL}/${singleBeer.id}`,
                    { signal }
                );

                const data = await response.json();
                console.log(data);
                setBeer(data);
            } catch (error) {
                console.log('There was an error fetching from the API', error);
            }
        }

        fetchSingleBeer();
        return () => {
            controller.abort();
        };
    }, [singleBeer]);

    return (
        <div>
            <Navbar />
            <div>
                <img src={beer.image_url} alt={beer.name} width={80} />
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </div>
        </div>
    );
}

export default SingleBeer;