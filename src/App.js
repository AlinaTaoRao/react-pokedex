import logo from './logo.svg';
import './App.css';

import Logo from "./components/logo/Logo.jsx";
import BestPokemon from "./components/best-pokemon/BestPokemon.jsx";
import CaughtPokemon from "./components/caught-pokemon/CaughtPokemon.jsx";

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </div>
  );
}

export default App;
