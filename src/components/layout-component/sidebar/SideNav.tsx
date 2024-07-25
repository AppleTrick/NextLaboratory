import styles from './sideNav.module.css';
import SidebarHeader from './sidebarHeader/SidebarHeader';
import NavItem from './navItem/NavItem';
import { useState } from 'react';
import { menuItems, settingItems, accountItems } from '@/common/menuData';

const SideNav = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleNavItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <div className={styles.nav}>
        <div className={styles.menu}>
          <p className={styles.menuTitle}>Components</p>
          <ul>
            {menuItems.map((item) => (
              <NavItem
                key={item.index}
                index={item.index}
                href={item.href}
                icon={item.icon}
                text={item.text}
                subMenu={item.subMenu}
                isActive={activeIndex === item.index}
                onClick={() => handleNavItemClick(item.index)}
              />
            ))}
          </ul>
        </div>
        <div className={styles.menu}>
          <p className={styles.menuTitle}>setting</p>
          <ul>
            {settingItems.map((item) => (
              <NavItem key={item.index} index={item.index} href={item.href} icon={item.icon} text={item.text} isActive={activeIndex === item.index} onClick={() => handleNavItemClick(item.index)} />
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.menu}>
        <p className={styles.menuTitle}>Account</p>
        <ul>
          {accountItems.map((item) => (
            <NavItem key={item.index} index={item.index} href={item.href} icon={item.icon} text={item.text} isActive={activeIndex === item.index} onClick={() => handleNavItemClick(item.index)} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
