import { Route, Routes } from 'react-router-dom';

import CaseStudies from '../../components/CaseStudies/CaseStudies.component';
import Home from '../../components/main/Home/Home.component';
import React from 'react';
import styles from './Main.module.scss';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-studies" element={<CaseStudies />} />
    </Routes>
  );
}

export default Main;
