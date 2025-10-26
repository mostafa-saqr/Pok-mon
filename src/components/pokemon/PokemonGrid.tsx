import React from "react";
import PokemonCard from "./PokemonCard";
import styles from "./PokemonGrid.module.css";
import type { Pokemon } from "../../types/pokemon";
import { Link } from "react-router";

interface PokemonGridProps {
  pokemonList: Pokemon[];
}
const imageBaseUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const PokemonGrid: React.FC<PokemonGridProps> = ({ pokemonList }) => {
  if (!pokemonList || pokemonList.length === 0) {
    return (
      <div className={styles.errorContainer}>
        <p>No Pokémon found</p>
      </div>
    );
  }

  const getUrlNumber = (url: string): string => {
    const match = url.match(/\/(\d+)\/$/);
    return match ? match[1] : "";
  };

  return (
    <div className={styles.grid}>
      {pokemonList.map((pokemon) => {
        return (
          <Link to={`/pokemon/${getUrlNumber(pokemon.url)}`}>
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              imageUrl={imageBaseUrl + getUrlNumber(pokemon.url) + ".png"}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default PokemonGrid;
