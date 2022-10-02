import { Button, Title } from '@mantine/core';

import { Link } from 'react-router-dom';
import styles from './CallToAction.module.scss';

type CallToActionProps = {
  title?: string;
  desc?: string;
  altColour?: boolean;
  buttonLink: string;
  buttonText?: string;
  externalLink?: boolean;
  hideButton?: boolean;
};

function CallToAction({
  title,
  desc,
  buttonLink,
  altColour,
  buttonText = 'View More',
  externalLink,
  hideButton = false,
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
      {!hideButton && (
        <p className={styles.paragraph}>
          {externalLink ? (
            <Button
              component="a"
              href={buttonLink}
              target="_blank"
              rel="noreferrer"
              className={altColour ? styles['button--light'] : styles.button}
            >
              {buttonText}
            </Button>
          ) : (
            <Button
              component={Link}
              to={buttonLink}
              className={altColour ? styles['button--light'] : styles.button}
            >
              {buttonText}
            </Button>
          )}
        </p>
      )}
    </div>
  );
}

export default CallToAction;
