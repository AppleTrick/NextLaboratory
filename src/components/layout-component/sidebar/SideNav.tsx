import styles from './sideNav.module.css';
import SidebarHeader from './sidebarHeader/SidebarHeader';
import NavItem from './navItem/NavItem';
import { FaHome, FaUsers } from 'react-icons/fa'; // Font Awesome 아이콘을 임포트
import { useState } from 'react';

const SideNav = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const menuItems = [
    // 함수 컴포넌트
    {
      index: 0,
      href: '/docs-page/functional-components',
      icon: <FaUsers className={styles.icon} />,
      text: '함수 컴포넌트',
      subMenu: [{ href: '/docs-page/functional-components/context_api', text: 'Context API' }],
    },
    // 외부 라이브러리 참조한 컴포넌트
    {
      index: 1,
      href: '/docs-page/special-components',
      icon: <FaUsers className={styles.icon} />,
      text: '스페셜 컴포넌트',
      subMenu: [
        { href: '/docs-page/special-components/mdx-page', text: 'mdx-page' },
        { href: '/docs-page/special-components/react-editor', text: 'react-editor' },
        { href: '/docs-page/special-components/three', text: 'three' },
        { href: '/docs-page/special-components/ocrimagepaste', text: 'OcrImagePaste' },
      ],
    },
    // UI로서 응용할 수 있는 컴포넌트
    {
      index: 2,
      href: '/docs-page/ui-components',
      icon: <FaUsers className={styles.icon} />,
      text: 'UI 컴포넌트',
      subMenu: [
        { href: '/docs-page/ui-components/InfiniteScrollingImages', text: 'InfiniteScrollingImage' },
        { href: '/docs-page/ui-components/toggleThemeComponent', text: 'ToogleThemeComponent' },
        { href: '/docs-page/ui-components/ToolTip', text: 'ToolTip' },
      ],
    },
    // {
    //   index: 3,
    //   href: '/docs-page/three_movie',
    //   icon: <FaUsers className={styles.icon} />,
    //   text: 'movieComponents',
    // },
  ];

  const settingItems = [{ index: 5, href: '', icon: <FaHome className={styles.icon} />, text: 'Setting' }];
  const accountItems = [{ index: 6, href: '', icon: <FaHome className={styles.icon} />, text: 'Help' }];

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
