import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer/Footer.component';
import Main from '../Main/Main.component';
import Nav from '../Nav/Nav.component';
import styles from './Layout.module.scss';

function Layout() {
  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <div className={styles.nav}>
          <Nav />
        </div>
        <div className={styles.main}>
          <Main />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Layout;
