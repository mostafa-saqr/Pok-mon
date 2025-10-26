import React from "react";
import Loader from "../common/Loader";
import styles from "../../pages/PokemonDetail.module.css";

const PokemonDetailSkeleton: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Header Skeleton */}
        <div className={styles.headerSkeleton}>
          <Loader variant="skeleton" className={styles.headerContentSkeleton} />
        </div>

        {/* Main Content Skeleton */}
        <div className={styles.mainContentSkeleton}>
          {/* Left Column Skeleton */}
          <div className={styles.leftColumnSkeleton}>
            <Loader variant="skeleton" className={styles.imageSkeleton} />
            <Loader variant="skeleton" className={styles.typeBadgeSkeleton} />
            <Loader
              variant="skeleton"
              className={styles.physicalDetailsSkeleton}
            />
          </div>

          {/* Right Column Skeleton */}
          <div className={styles.rightColumnSkeleton}>
            <Loader
              variant="skeleton"
              className={styles.statsSectionSkeleton}
            />
            <Loader
              variant="skeleton"
              className={styles.abilitiesSectionSkeleton}
            />
            <Loader
              variant="skeleton"
              className={styles.experienceSectionSkeleton}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailSkeleton;
