import React from "react";
import Button from "./Button";
import styles from "./Button.module.css";

interface ToggleButtonProps {
  options: Array<{
    label: string;
    value: string;
  }>;
  selectedValue: string;
  onToggle: (value: string) => void;
  className?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  options,
  selectedValue,
  onToggle,
  className = "",
}) => {
  return (
    <div className={`${styles.toggleGroup} ${className}`}>
      {options.map((option) => (
        <Button
          key={option.value}
          variant={selectedValue === option.value ? "primary" : "secondary"}
          onClick={() => onToggle(option.value)}
          className={styles.toggleButton}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default ToggleButton;
