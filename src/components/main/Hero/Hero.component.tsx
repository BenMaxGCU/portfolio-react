import { ArrowDownIcon } from '@modulz/radix-icons';
import React from 'react';
import styles from './Hero.module.scss';

type HeroProps = {
  scrollToComponent?: () => void;
};

function Hero(props: HeroProps) {
  return (
    <div className={styles.hero}>
      <div className={styles['hero-container']}>
        <h1>Hello, I'm Ben.</h1>
        <h2>a software engineer.</h2>
        <div className={styles['icon-box']}>
          <div className={styles.icon} onClick={props.scrollToComponent}>
            <ArrowDownIcon
              style={{ width: 36, height: 36, color: '#C94B62' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
