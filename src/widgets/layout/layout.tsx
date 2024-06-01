import { Outlet } from 'react-router-dom';
import { Header } from '@widgets/header';

import styles from './layout.module.scss';

export const Layout = () => (
  <>
    <Header />
    <main className={styles.wrapper}>
      <Outlet />
    </main>
  </>
);
