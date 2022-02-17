import React from 'react';
import { ArrowDownIcon } from '@modulz/radix-icons';
import './Hero.scss';

function Hero() {
  return (
    <div className={'hero'}>
      <div className={'hero-container'}>
        <h1>Hello, I'm Ben.</h1>
        <h2>a software engineer.</h2>
        <div className={'icon-box'}>
          <div className={'icon'}>
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
