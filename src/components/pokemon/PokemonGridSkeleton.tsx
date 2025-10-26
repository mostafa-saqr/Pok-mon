import React from "react";
import Loader from "../common/Loader";
import styles from "./PokemonGrid.module.css";

interface PokemonGridSkeletonProps {
  count?: number;
}

const PokemonGridSkeleton: React.FC<PokemonGridSkeletonProps> = ({
  count = 20,
}) => {
  return (
    <div className={styles.grid}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={styles.skeletonCard}>
          <Loader variant="skeleton" className={styles.skeletonImage} />
          <div className={styles.skeletonTextContainer}>
            <Loader variant="skeleton" className={styles.skeletonName} />
            <Loader variant="skeleton" className={styles.skeletonNumber} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonGridSkeleton;
