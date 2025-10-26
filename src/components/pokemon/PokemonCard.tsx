import React from "react";
import type { Pokemon } from "../../types/pokemon";
import styles from "./PokemonCard.module.css";

interface PokemonCardProps {
  pokemon: Pokemon;

  imageUrl: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,

  imageUrl,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={imageUrl}
          alt={pokemon.name}
          className={styles.pokemonImage}
        />
      </div>
      <div className={styles.name}>{pokemon.name}</div>
    </div>
  );
};

export default PokemonCard;
