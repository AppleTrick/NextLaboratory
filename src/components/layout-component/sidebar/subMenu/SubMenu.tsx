import styles from './subMenu.module.css';
import Link from 'next/link';

interface SubMenuProps {
  items: { href: string; text: string }[];
  isSubMenuOpen: boolean;
}

const SubMenu: React.FC<SubMenuProps> = ({ items, isSubMenuOpen }) => {
  return (
    <ul className={`${styles.subMenu} ${isSubMenuOpen ? styles.open : styles.close}`}>
      {items.map((item, index) => (
        <li key={index} className={styles.li}>
          <Link className={`${styles.link} ${styles.subMenuLink}`} href={item.href}>
            <span className={styles.text}>{item.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
