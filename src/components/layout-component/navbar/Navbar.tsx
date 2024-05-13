import Link from "next/link";
import styles from "./navbar.module.css";
import SearchBar from "../searchBar/SearchBar";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div className={styles.logo}>넥스트 연구실</div>
        <Link href="" className={styles.link}>
          Docs
        </Link>
        <Link href="" className={styles.link}>
          Category1
        </Link>
        <Link href="" className={styles.link}>
          Category1
        </Link>
      </div>
      <div className={styles.otherside}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
