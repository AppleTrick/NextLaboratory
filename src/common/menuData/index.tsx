import { ReactElement } from 'react';
import { FaUsers, FaHome } from 'react-icons/fa';
import styles from './menuData.module.css';

interface SubMenu {
  href: string;
  text: string;
}

interface Items {
  index: number;
  href: string;
  icon: ReactElement;
  text: string;
  subMenu: SubMenu[];
}

export const menuItems: Items[] = [
  {
    index: 0,
    href: '/docs-page/functional-components',
    icon: <FaUsers className={styles.icon} />,
    text: '함수 컴포넌트',
    subMenu: [{ href: '/docs-page/functional-components/context_api', text: 'Context API' }],
  },
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
  {
    index: 3,
    href: '/docs-page/library-collection',
    icon: <FaUsers className={styles.icon} />,
    text: '라이브러리 모음',
    subMenu: [
      { href: '/docs-page/library-collection/InfiniteScrollingImages', text: 'InfiniteScrollingImage' },
      { href: '/docs-page/library-collection/toggleThemeComponent', text: 'ToogleThemeComponent' },
      { href: '/docs-page/library-collection/ToolTip', text: 'ToolTip' },
    ],
  },
];

export const settingItems = [{ index: 5, href: '', icon: <FaHome className={styles.icon} />, text: 'Setting' }];
export const accountItems = [{ index: 6, href: '', icon: <FaHome className={styles.icon} />, text: 'Help' }];
