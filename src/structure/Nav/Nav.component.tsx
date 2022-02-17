import React from 'react';
import { Link } from 'react-router-dom';
import ColourToggle from '../../components/utility/ColourToggle/ColourToggle.component';
import './Nav.scss';

function Nav() {
  return (
    <div className={'container'}>
      <div className={'logo'}>
        <h1>
          <Link to="/">Ben Maxwell</Link>
        </h1>
      </div>

      <nav className={'nav-menu-container'}>
        <ul className={'nav-menu'}>
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
