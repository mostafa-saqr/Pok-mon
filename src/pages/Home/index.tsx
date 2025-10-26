import { useState } from "react";
import ToggleButton from "../../components/common/ToggleButton";
import PaginationView from "./PaginationView";
import LoadMoreView from "./LoadMoreView";
import styles from "./Home.module.css";

type ViewMode = "pagination" | "infinite";

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>("pagination");
  const [currentPage, setCurrentPage] = useState(1);

  const handleViewToggle = (value: string) => {
    setViewMode(value as ViewMode);
    // Reset to page 1 when switching views
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div
      className={`${styles.homeContainer} ${
        viewMode === "pagination" ? styles.paginationMode : styles.infiniteMode
      }`}
    >
      {/* Header Section */}
      <div className={styles.headerSection}>
        <h1 className={styles.title}>
          <span className={styles.lightningIcon}>⚡</span>
          Pokédex
        </h1>
        <p className={styles.subtitle}>
          Discover and explore Pokemon with infinite scroll
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className={styles.toggleContainer}>
        <ToggleButton
          options={[
            { label: "Page Controls", value: "pagination" },
            { label: "Infinite Scroll", value: "infinite" },
          ]}
          selectedValue={viewMode}
          onToggle={handleViewToggle}
        />
      </div>

      {/* Content Area */}
      <div className={styles.contentArea}>
        {viewMode === "pagination" ? (
          <PaginationView
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        ) : (
          <LoadMoreView />
        )}
      </div>
    </div>
  );
}
