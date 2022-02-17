import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../components/main/Home/Home.component';
import './Main.scss';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-studies"></Route>
    </Routes>
  );
}

export default Main;
