import styles from './sideNav.module.css';
import SidebarHeader from './sidebarHeader/SidebarHeader';
import NavItem from './navItem/NavItem';
import { FaHome, FaUsers } from 'react-icons/fa'; // Font Awesome 아이콘을 임포트
import { useState } from 'react';

const SideNav = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const menuItems = [
    { index: 0, href: '', icon: <FaHome className={styles.icon} />, text: 'DashBoard' },
    {
      index: 1,
      href: '',
      icon: <FaUsers className={styles.icon} />,
      text: 'Audience',
      subMenu: [
        { href: '', text: 'Users' },
        { href: '', text: 'Subscribers' },
      ],
    },
    { index: 2, href: '', icon: <FaHome className={styles.icon} />, text: 'Posts' },
    { index: 3, href: '', icon: <FaHome className={styles.icon} />, text: 'Schedules' },
    {
      index: 4,
      href: '',
      icon: <FaUsers className={styles.icon} />,
      text: 'Income',
      subMenu: [
        { href: '', text: 'Earnings' },
        { href: '', text: 'Funds' },
        { href: '', text: 'Declines' },
        { href: '', text: 'Payments' },
      ],
    },
  ];

  const handleNavItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <div className={styles.nav}>
        <div className={styles.menu}>
          <p className={styles.menuTitle}>Main</p>
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
      </div>
    </div>
  );
};

export default SideNav;
