import { useWindowScroll } from '@mantine/hooks';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../Main/Main.component';
import Nav from '../Nav/Nav.component';
import styles from './Layout.module.scss';

function Layout() {
  const [scroll] = useWindowScroll();
  const prevScrollpos = useRef(scroll.y);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const currentScrollPos = scroll.y;
    const visible =
      prevScrollpos.current >= currentScrollPos ?? currentScrollPos === 0;

    prevScrollpos.current = currentScrollPos;
    setVisible(visible);
  }, [prevScrollpos, scroll]);

  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <div className={styles.nav}>
          <Nav visible={visible} />
        </div>
        <div className={styles.main}>
          <Main />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
