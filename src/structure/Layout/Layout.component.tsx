import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../Main/Main.component';
import Nav from '../Nav/Nav.component';
import './Layout.scss';

function Layout() {
  return (
    <BrowserRouter>
      <div className={'container'}>
        <div className={'Nav'}>
          <Nav />
        </div>
        <div className={'Main'}>
          <Main />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
