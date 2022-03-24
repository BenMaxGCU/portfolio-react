import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <p className={styles.footer}>
          &#10024; {new Date().getFullYear()} Ben Maxwell.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
