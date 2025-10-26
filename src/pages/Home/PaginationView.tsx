// PaginationView component
import React from "react";
import { usePokemonList } from "../../hooks/usePokemonList";
import PokemonGrid from "../../components/pokemon/PokemonGrid";
import Pagination from "./Pagination";
import styles from "./Home.module.css";
import PokemonGridSkeleton from "../../components/pokemon/PokemonGridSkeleton";

interface PaginationViewProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationView: React.FC<PaginationViewProps> = ({
  currentPage,
  onPageChange,
}) => {
  const limit = 20;
  const offset = (currentPage - 1) * limit;

  const { data, isLoading, error } = usePokemonList(limit, offset);

  if (isLoading) {
    return (
      <div className={styles.viewContainer}>
        <PokemonGridSkeleton count={20} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p>Error loading Pokémon: {error.message}</p>
      </div>
    );
  }

  const pokemonList = data?.data?.results || [];
  const totalCount = data?.data?.count || 0;
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className={styles.viewContainer}>
      <PokemonGrid pokemonList={pokemonList} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        totalCount={totalCount}
      />
    </div>
  );
};

export default PaginationView;
