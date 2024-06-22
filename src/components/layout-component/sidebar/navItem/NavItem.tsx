import { useState } from 'react';
import styles from './navItem.module.css';
import { FaAngleDown } from 'react-icons/fa';
import SubMenu from '../subMenu/SubMenu';

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  subMenu?: { href: string; text: string }[];
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, text, subMenu }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(false);

  const handleItemClick = () => {
    if (subMenu) {
      setIsSubMenuOpen(!isSubMenuOpen);
      setIsInitialRender(true);
    }
  };

  return (
    <li className={`${styles.li}`}>
      <div className={`${styles.link}`} onClick={handleItemClick}>
        {icon}
        <span className={styles.text}>{text}</span>
        {subMenu && <FaAngleDown className={`${styles.arrow} ${isSubMenuOpen ? styles.rotate : ''}`} />}
      </div>
      {subMenu && isInitialRender && <SubMenu items={subMenu} isSubMenuOpen={isSubMenuOpen} />}
    </li>
  );
};

export default NavItem;
