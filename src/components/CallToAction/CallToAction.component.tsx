import { Button, Title } from '@mantine/core';

import { Link } from 'react-router-dom';
import React from 'react';
import styles from './CallToAction.module.scss';

type CallToActionProps = {
  title?: string;
  desc?: string;
  altColour?: boolean;
  buttonLink: string;
};

function CallToAction({
  title,
  desc,
  buttonLink,
  altColour,
}: CallToActionProps) {
  return (
    <div className={styles.container}>
      <Title
        className={altColour ? styles['header--light'] : styles.header}
        order={1}
      >
        {title}
      </Title>
      <Title
        className={altColour ? styles['subtitle--light'] : styles.subtitle}
        order={2}
      >
        {desc}
      </Title>
      <br />
      <p className={styles.paragraph}>
        <Button
          component={Link}
          to={buttonLink}
          className={altColour ? styles['button--light'] : styles.button}
        >
          View More
        </Button>
      </p>
    </div>
  );
}

export default CallToAction;
