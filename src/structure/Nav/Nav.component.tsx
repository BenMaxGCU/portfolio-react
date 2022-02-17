/* eslint-disable jsx-a11y/anchor-is-valid */
import { useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import ColourToggle from '../../components/utility/ColourToggle/ColourToggle.component';
import './Nav.scss';

function Nav() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <div className={'container'}>
      <div className={colorScheme === 'dark' ? 'logo' : 'logo--light'}>
        <h1>
          <Link to="/">Ben Maxwell</Link>
        </h1>
      </div>

      <nav className={'nav-menu-container'}>
        <ul className={colorScheme === 'dark' ? 'nav-menu' : 'nav-menu--light'}>
          <li>
            <a>
              <Link to="/case-studies">Case Studies</Link>
            </a>
          </li>
          <li>
            <a>
              <ColourToggle />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
