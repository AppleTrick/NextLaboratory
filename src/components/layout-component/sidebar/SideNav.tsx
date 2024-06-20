import styles from './sideNav.module.css';
import SidebarHeader from './sidebarHeader/SidebarHeader';
import NavItem from './navItem/NavItem';
import { FaHome, FaUsers } from 'react-icons/fa'; // Font Awesome 아이콘을 임포트

const SideNav = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <div className={styles.nav}>
        <div className={styles.menu}>
          <p className={styles.menuTitle}>Main</p>
          <ul>
            <NavItem href="" icon={<FaHome className={styles.icon} />} text="DashBoard" />
            <NavItem
              href=""
              icon={<FaUsers className={styles.icon} />}
              text="Audience"
              subMenu={[
                { href: '', text: 'Users' },
                { href: '', text: 'Subscribers' },
              ]}
            />
            <NavItem href="" icon={<FaHome className={styles.icon} />} text="Posts" />
            <NavItem href="" icon={<FaHome className={styles.icon} />} text="Schedules" />
            <NavItem
              href=""
              icon={<FaUsers className={styles.icon} />}
              text="Income"
              subMenu={[
                { href: '', text: 'Earnings' },
                { href: '', text: 'Funds' },
                { href: '', text: 'Declines' },
                { href: '', text: 'Payments' },
              ]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
