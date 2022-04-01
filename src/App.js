import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import Home from './components/Home.js';
import RandomBeer from './components/RandomBeer.js';
import ListBeers from './components/ListBeers.js';
import NewBeer from './components/NewBeer.js';
import SingleBeer from './components/SingleBeer.js';
import './App.css';

function App() {
  const [allBeers, setAllBeers] = useState([]);
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    async function fetchAllBeers() {
      const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
      const data = await response.json();
      if (!data) return;
      setAllBeers(data);
    }
    fetchAllBeers();

    async function fetchRandomBeer() {
      const response = await fetch("https://ih-beers-api2.herokuapp.com/beers/random");
      const data = await response.json();
      if (!data) return;
      setRandomBeer(data);
    }
    fetchRandomBeer();
  }, []);

  function Custom404Page() {
    return (
      <div>
        <h1>404 - Ooops. This route doesn't exist!</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="*" element={<Custom404Page />} />
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<ListBeers allBeers={allBeers} />} />
          <Route path="/random-beer" element={<RandomBeer randomBeer={randomBeer} />} />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route path="/beers/:id" element={<SingleBeer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
