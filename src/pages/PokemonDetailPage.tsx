import { useParams, useNavigate } from "react-router";
import { usePokemonDetail } from "../hooks/usePokemonDetail";
import type { PokemonDetail as PokemonDetailType } from "../types/pokemon";
import Button from "../components/common/Button";
import PokemonDetailSkeleton from "../components/pokemon/PokemonDetailSkeleton";
import styles from "./PokemonDetail.module.css";

export default function PokemonDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: pokemon, isLoading, error } = usePokemonDetail(id || "");

  const handleBackToList = () => {
    navigate("/");
  };

  const getPokemonNumber = (): string => {
    return id ? `#${id.padStart(3, "0")}` : "";
  };

  const getStatBarWidth = (stat: number): string => {
    const maxStat = 150; // Maximum stat value for scaling
    return `${(stat / maxStat) * 100}%`;
  };

  if (isLoading) {
    return <PokemonDetailSkeleton />;
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p>Error loading Pokémon: {error.message}</p>
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className={styles.errorContainer}>
        <p>Pokémon not found</p>
      </div>
    );
  }

  const primaryType = pokemon.types[0]?.type.name || "normal";

  return (
    <div className={styles.container}>
      {/* Back to List Button */}
      <div className={styles.backButtonContainer}>
        <Button
          variant="secondary"
          onClick={handleBackToList}
          className={styles.backButton}
        >
          <span className={styles.backIcon}>←</span>
          Back to List
        </Button>
      </div>

      <div className={styles.card}>
        {/* Header */}
        <div
          className={styles.header}
          style={{
            background: "linear-gradient(135deg, #8e44ad, #e74c3c)",
          }}
        >
          <div className={styles.headerContent}>
            <div className={styles.lightningIcon}>⚡</div>
            <div className={styles.headerText}>
              <h1 className={styles.pokemonName}>{pokemon.name}</h1>
              <p className={styles.pokemonNumber}>{getPokemonNumber()}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Pokémon Image */}
            <div className={styles.imageContainer}>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className={styles.pokemonImage}
              />
            </div>

            {/* Type Badge */}
            <div
              className={styles.typeBadge}
              style={{ backgroundColor: "#8e44ad" }}
            >
              {primaryType}
            </div>

            {/* Physical Details */}
            <div className={styles.physicalDetails}>
              <div className={styles.physicalItem}>
                <span className={styles.icon}>📎</span>
                <div className={styles.physicalInfo}>
                  <span className={styles.label}>Height</span>
                  <span className={styles.value}>
                    {(pokemon.height / 10).toFixed(1)} m
                  </span>
                </div>
              </div>
              <div className={styles.physicalItem}>
                <span className={styles.icon}>⚖️</span>
                <div className={styles.physicalInfo}>
                  <span className={styles.label}>Weight</span>
                  <span className={styles.value}>
                    {(pokemon.weight / 10).toFixed(1)} kg
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            {/* Base Stats */}
            <div className={styles.statsSection}>
              <h3 className={styles.sectionTitle}>Base Stats</h3>
              <div className={styles.statsList}>
                {pokemon.stats.map((stat: PokemonDetailType["stats"][0]) => (
                  <div key={stat.stat.name} className={styles.statItem}>
                    <div className={styles.statHeader}>
                      <span className={styles.statName}>{stat.stat.name}</span>
                      <span className={styles.statValue}>{stat.base_stat}</span>
                    </div>
                    <div className={styles.statBar}>
                      <div
                        className={styles.statBarFill}
                        style={{
                          width: getStatBarWidth(stat.base_stat),
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Abilities */}
            <div className={styles.abilitiesSection}>
              <h3 className={styles.sectionTitle}>Abilities</h3>
              <div className={styles.abilitiesList}>
                {pokemon.abilities.map(
                  (ability: PokemonDetailType["abilities"][0]) => (
                    <div
                      key={ability.ability.name}
                      className={styles.abilityItem}
                    >
                      <span className={styles.abilityName}>
                        {ability.ability.name}
                      </span>
                      {ability.is_hidden && (
                        <span className={styles.hiddenLabel}>(Hidden)</span>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Base Experience */}
            <div className={styles.experienceSection}>
              <h3 className={styles.sectionTitle}>Base Experience</h3>
              <div className={styles.experienceValue}>
                {pokemon.base_experience} XP
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
