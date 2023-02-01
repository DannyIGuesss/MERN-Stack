import './App.css';

import {useState, useEffect} from 'react'

function App() {

  const [pokemonInfo, setpokemonInfo] = useState([])

//We are making the api call here and using useEffect (lets react know we need to do something after render)
//we also use an empty array so that it only loads when the page loads
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
    //here we are using the .json to convert it into js so we can use it
    .then(result => result.json())
    .then((result) =>  setpokemonInfo(result.results))
    .catch((err) => {console.log(err);})
  }, [])

  return (
    <div>
      {
        pokemonInfo.map((pokemon) => (
          <p className='center'>{pokemon.name}</p>
        ))
      }
    </div>

  );
}

export default App;
