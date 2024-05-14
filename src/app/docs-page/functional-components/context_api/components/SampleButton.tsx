"use client";

import { useContext } from "react";
import { ThemeContext } from "./NewContextProvider";
import styles from "./sampleButton.module.css";

const SampleButton = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    return <div>Theme context not available</div>;
  }

  const { theme, ChangeTheme } = context;

  return (
    <div className={styles.box} style={theme === "dark" ? { background: "black" } : { background: "white" }}>
      <button className={styles.button} onClick={ChangeTheme}>
        button
      </button>
    </div>
  );
};

export default SampleButton;
