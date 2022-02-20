import React from 'react';
import About from '../About/About.component';
import Hero from '../Hero/Hero.component';
import styles from './Home.module.scss';

function Home() {
  return (
    <>
      <Hero />
      <div>
        <About />
      </div>
    </>
  );
}

export default Home;
