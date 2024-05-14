import Image from "next/image";
import styles from "./toggleTheme.module.css";

const ToggleThemeComponent = () => {
  const theme = "dark";
  return (
    <div className={styles.container} style={theme === "dark" ? { background: "white" } : { background: "#0f172a" }}>
      <Image src={"/moon.png"} alt="" width={56} height={56} />
      <div className={styles.ball} style={theme === "dark" ? { left: 1, background: "#0f172a" } : { right: 1, background: "white" }}></div>
      <Image src={"/sun.png"} alt="" width={56} height={56} />
    </div>
  );
};

export default ToggleThemeComponent;
