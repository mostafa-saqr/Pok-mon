import React, { useState, useEffect, useCallback } from "react";
import { usePokemonList } from "../../hooks/usePokemonList";
import PokemonGrid from "../../components/pokemon/PokemonGrid";
import Button from "../../components/common/Button";
import type { Pokemon } from "../../types/pokemon";
import styles from "./Home.module.css";
import PokemonGridSkeleton from "../../components/pokemon/PokemonGridSkeleton";

const LoadMoreView: React.FC = () => {
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState<number>(0);

  const limit = 20;
  const { data, isLoading, error } = usePokemonList(limit, currentOffset);

  // Load more function
  const loadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      setCurrentOffset((prev) => prev + limit);
    }
  }, [isLoading, hasMore, limit]);

  // Update Pokemon list when new data arrives
  useEffect(() => {
    if (data?.data?.results) {
      if (currentOffset === 0) {
        // First load
        setAllPokemon(data.data.results);
      } else {
        // Load more - append to existing list
        setAllPokemon((prev) => [...prev, ...data.data.results]);
      }

      // Set total count from API
      if (data?.data?.count) {
        setTotalCount(data.data.count);
      }

      // Check if there are more Pokemon to load
      setHasMore(data.data.results.length === limit);
    }
  }, [data, currentOffset, limit]);

  // Reset when component mounts
  useEffect(() => {
    setAllPokemon([]);
    setCurrentOffset(0);
    setHasMore(true);
  }, []);

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p>Error loading Pokémon: {error.message}</p>
      </div>
    );
  }

  const loadCount = allPokemon.length;

  return (
    <div className={styles.viewContainer}>
      <PokemonGrid pokemonList={allPokemon} />

      {isLoading && allPokemon.length === 0 && (
        <PokemonGridSkeleton count={20} />
      )}

      {hasMore && allPokemon.length > 0 && (
        <div className={styles.loadMoreSection}>
          <div className={styles.loadMoreContainer}>
            <Button
              variant="secondary"
              onClick={loadMore}
              disabled={isLoading}
              className={styles.loadMoreButton}
            >
              {isLoading ? "Loading..." : "Load More"}
            </Button>
          </div>

          {/* Pagination Info */}
          <div className={styles.pageInfo}>
            <p>
              Showing {loadCount} of {totalCount} Pokémon
            </p>
          </div>
        </div>
      )}

      {!hasMore && allPokemon.length > 0 && (
        <div className={styles.endMessage}>
          <p>You've reached the end! All Pokémon loaded.</p>
        </div>
      )}
    </div>
  );
};

export default LoadMoreView;
