/* eslint-disable jsx-a11y/anchor-is-valid */
import { Burger, Drawer, useMantineColorScheme } from '@mantine/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ColourToggle from '../../components/utility/ColourToggle/ColourToggle.component';
import useWindowDimension from '../../hooks/useWindowDimension';
import styles from './Nav.module.scss';

type NavProps = {
  visible?: boolean;
};

function Nav({ visible }: NavProps) {
  const [opened, setOpened] = useState(false);
  const windowDimension = useWindowDimension();
  const { colorScheme } = useMantineColorScheme();

  const isMobile = windowDimension <= 1040;
  const isDarkMode = colorScheme === 'dark';
  const burgerTitle = opened ? 'Close navigation' : 'Open navigation';

  return !isMobile ? (
    <div className={visible ? styles.container : styles['container--hidden']}>
      <div className={isDarkMode ? styles.logo : styles['logo--light']}>
        <h1>
          <Link to="/">Ben Maxwell</Link>
        </h1>
      </div>

      <nav className={styles.navMenuContainer}>
        <ul className={isDarkMode ? styles.navMenu : styles['navMenu--light']}>
          <li>
            <Link to="/case-studies">Case Studies</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <a>
              <ColourToggle />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  ) : (
    <div
      className={
        visible ? styles['container--mobile'] : styles['container--hidden']
      }
    >
      {!opened && (
        <div
          className={
            isDarkMode ? styles['mobileLogo'] : styles['mobileLogo--light']
          }
        >
          <h1>
            <Link to="/">Ben Maxwell</Link>
          </h1>
        </div>
      )}
      <nav className={styles.navMenuContainer}>
        <ul className={isDarkMode ? styles.navMenu : styles['navMenu--light']}>
          <li>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={burgerTitle}
            />
          </li>
          <li>
            <a>
              <ColourToggle />
            </a>
          </li>
        </ul>
      </nav>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        hideCloseButton={true}
        padding="md"
        size="sm"
      >
        <ul
          className={isDarkMode ? styles.mobileNav : styles['mobileNav--light']}
        >
          <div className={isDarkMode ? styles.logo : styles['logo--light']}>
            <h1>
              <Link to="/">Ben Maxwell</Link>
            </h1>
          </div>
          <li>
            <Link to="/case-studies">Case Studies</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
}

export default Nav;
