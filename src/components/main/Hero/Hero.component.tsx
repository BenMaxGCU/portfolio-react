import React from 'react';
import { ArrowDownIcon } from '@modulz/radix-icons';
import styles from './Hero.module.scss';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles['hero-container']}>
        <h1>Hello, I'm Ben.</h1>
        <h2>a software engineer.</h2>
        <div className={styles['icon-box']}>
          <div className={styles.icon}>
            <ArrowDownIcon
              style={{ width: 36, height: 36, color: '#f67280' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
