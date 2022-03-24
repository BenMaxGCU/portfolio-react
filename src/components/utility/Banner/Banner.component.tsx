import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import styles from './Banner.module.scss';

type BannerProps = {
  title?: string;
  desc?: string;
  altColour?: boolean;
  buttonText?: string;
  buttonLink?: string;
  buttonDownload?: boolean;
  buttonDownloadText?: string;
  buttonIcon?: boolean;
};

function Banner({
  title,
  desc,
  altColour,
  buttonText,
  buttonLink,
  buttonDownload,
  buttonDownloadText,
  buttonIcon,
}: BannerProps) {
  return (
    <div
      className={altColour ? styles.background : styles['background--light']}
    >
      <div className={altColour ? styles.content : styles['content--light']}>
        <h2>{title}</h2>
        <p>{desc}</p>
        {buttonDownload ? (
          <a
            href={buttonLink}
            target="_blank"
            download={buttonDownloadText}
            rel="noreferrer"
          >
            {buttonIcon ? (
              <FontAwesomeIcon
                icon={faFile}
                color={altColour ? '#333' : '#f7fffd'}
                className={styles.icon}
              />
            ) : (
              ''
            )}
            {buttonText}
          </a>
        ) : (
          <a href={buttonLink} target="_blank" rel="noreferrer">
            {buttonIcon ? (
              <FontAwesomeIcon
                icon={faFile}
                color={altColour ? '#333' : '#f7fffd'}
                className={styles.icon}
              />
            ) : (
              ''
            )}
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}

export default Banner;
