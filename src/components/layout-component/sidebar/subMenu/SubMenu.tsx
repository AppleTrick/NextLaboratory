import styles from './subMenu.module.css';
import Link from 'next/link';

interface SubMenuProps {
  items: { href: string; text: string }[];
}

const SubMenu: React.FC<SubMenuProps> = ({ items }) => {
  return (
    <ul className={styles.subMenu}>
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
