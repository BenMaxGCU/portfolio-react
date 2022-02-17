import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Main/Main.component';
import Nav from '../Nav/Nav.component';
import './Layout.scss';

function Layout() {
  return (
    <BrowserRouter>
      <Nav />
      <Main />
    </BrowserRouter>
  );
}

export default Layout;
