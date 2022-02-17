import React from 'react';
import { Link } from 'react-router-dom';
import ColourToggle from '../../components/utility/ColourToggle/ColourToggle.component';
import './Nav.scss';

function Nav() {
  return (
    <div className={'container'}>
      <div id={'logo'}>
        <h1>
          <Link to="/">Ben Maxwell</Link>
        </h1>
      </div>

      <nav id={'nav-menu-container'}>
        <ul className={'nav-menu'}>
          <li>
            <a>
              <ColourToggle />
            </a>
            <a>
              <Link to="/case-studies">Case Studies</Link>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
