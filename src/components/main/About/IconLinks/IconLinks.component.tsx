import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styles from './IconLinks.module.scss';

function IconLinks() {
  return (
    <>
      <h4>Links:</h4>
      <div>
        <div className={styles.icon}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/BenMaxGCU"
          >
            <i>
              <FontAwesomeIcon icon={faGithub} />
            </i>
          </a>
        </div>
        <div className={styles.icon}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ben-maxwell-13498316b/"
          >
            <i>
              <FontAwesomeIcon icon={faLinkedin} />
            </i>
          </a>
        </div>
      </div>
    </>
  );
}

export default IconLinks;
