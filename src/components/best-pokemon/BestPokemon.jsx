
export const BestPokemon = (props) => {
    return (
      <div>
        <p>My favourite Pokemon is Squirtle</p>
        <ul>
          {props.abilities.map((ability, index) => {
            return <li key={index}>{ability}</li>;
          })}
        </ul>
      </div>
    );
  };

  export default BestPokemon;