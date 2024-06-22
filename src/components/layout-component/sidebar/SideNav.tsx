import styles from './sideNav.module.css';
import SidebarHeader from './sidebarHeader/SidebarHeader';
import NavItem from './navItem/NavItem';
import { FaHome, FaUsers } from 'react-icons/fa'; // Font Awesome 아이콘을 임포트
import { useState } from 'react';

const SideNav = () => {
  const [indexItem, setindexItem] = useState<number | null>(null);

  const handleNavItemClick = (index: number) => {
    setindexItem(index === indexItem ? null : index);
  };

  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <div className={styles.nav}>
        <div className={styles.menu}>
          <p className={styles.menuTitle}>Main</p>
          <ul>
            <NavItem index={0} href="" icon={<FaHome className={styles.icon} />} text="DashBoard" isActive={indexItem === 0} onClick={() => handleNavItemClick(0)} />
            <NavItem
              index={1}
              href=""
              icon={<FaUsers className={styles.icon} />}
              text="Audience"
              subMenu={[
                { href: '', text: 'Users' },
                { href: '', text: 'Subscribers' },
              ]}
              isActive={indexItem === 1}
              onClick={() => handleNavItemClick(1)}
            />
            <NavItem index={2} href="" icon={<FaHome className={styles.icon} />} text="Posts" isActive={indexItem === 2} onClick={() => handleNavItemClick(2)} />
            <NavItem index={3} href="" icon={<FaHome className={styles.icon} />} text="Schedules" isActive={indexItem === 3} onClick={() => handleNavItemClick(3)} />
            <NavItem
              index={4}
              href=""
              icon={<FaUsers className={styles.icon} />}
              text="Income"
              subMenu={[
                { href: '', text: 'Earnings' },
                { href: '', text: 'Funds' },
                { href: '', text: 'Declines' },
                { href: '', text: 'Payments' },
              ]}
              isActive={indexItem === 4}
              onClick={() => handleNavItemClick(4)}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
