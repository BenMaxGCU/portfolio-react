import { Center, Title } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { StarIcon } from '@modulz/radix-icons';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  const navigate = useNavigate();
  useDocumentTitle('Oops ✨ Ben Maxwell');

  return (
    <div className={styles.hero}>
      <div className={styles['hero-container']}>
        <h1>Oops.</h1>
        <h2>I can't find that page, sorry about that.</h2>
        <div className={styles['icon-box']}>
          <div className={styles.icon} onClick={() => navigate('/')}>
            <StarIcon style={{ width: 36, height: 36, color: '#C94B62' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
