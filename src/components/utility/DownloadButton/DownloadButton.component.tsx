import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import styles from './DownloadButton.module.scss';
import { Button } from '@mantine/core';

type DownloadButtonProps = {
  altColour?: boolean;
  buttonText?: string;
  buttonLink?: string;
  buttonDownloadText?: string;
  buttonIcon?: boolean;
};

function DownloadButton({
  altColour,
  buttonText,
  buttonLink,
  buttonDownloadText,
  buttonIcon,
}: DownloadButtonProps) {
  return (
    <Button
      component="a"
      href={buttonLink}
      rel="noreferrer"
      className={altColour ? styles['button--light'] : styles.button}
      download={buttonDownloadText}
    >
      {buttonIcon && <FontAwesomeIcon icon={faFile} />}
      {buttonText}
    </Button>
  );
}

export default DownloadButton;
