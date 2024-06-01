import { NavLink } from 'react-router-dom';

import styles from './header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Главная
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        О приложении
      </NavLink>
    </nav>
  </header>
);
