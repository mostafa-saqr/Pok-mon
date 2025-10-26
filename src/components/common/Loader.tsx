import React from "react";
import styles from "./Loader.module.css";

interface LoaderProps {
  variant?: "circular" | "skeleton";
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({
  variant = "circular",
  className = "",
}) => {
  if (variant === "skeleton") {
    return <div className={`${styles.skeleton} ${className}`}></div>;
  }

  return (
    <div className={`${styles.circular} ${className}`}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
