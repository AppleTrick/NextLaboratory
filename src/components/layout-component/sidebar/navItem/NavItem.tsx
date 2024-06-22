import { useEffect, useState } from 'react';
import styles from './navItem.module.css';
import { FaAngleDown } from 'react-icons/fa';
import SubMenu from '../subMenu/SubMenu';

interface NavItemProps {
  index: number;
  href: string;
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
  onClick: () => void;
  subMenu?: { href: string; text: string }[];
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, text, subMenu, isActive, onClick }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(false);

  const handleItemClick = () => {
    onClick();
    if (subMenu) {
      setIsSubMenuOpen(!isSubMenuOpen);
      setIsInitialRender(true);
    }
  };

  useEffect(() => {
    if (isActive === false) {
      setIsSubMenuOpen(false);
    }
  });

  return (
    <li className={`${styles.li}`}>
      <div className={`${styles.link} ${isActive ? styles.active : ''}`} onClick={handleItemClick}>
        {icon}
        <span className={styles.text}>{text}</span>
        {subMenu && <FaAngleDown className={`${styles.arrow} ${isSubMenuOpen ? styles.rotate : ''}`} />}
      </div>
      {subMenu && isInitialRender && <SubMenu items={subMenu} isSubMenuOpen={isSubMenuOpen} />}
    </li>
  );
};

export default NavItem;
