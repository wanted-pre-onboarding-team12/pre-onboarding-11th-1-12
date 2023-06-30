import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.scss';
import { IconLemon } from '../../assets';

const Nav = () => {
  const logout = () => localStorage.clear();

  return (
    <nav className={styles.wrap}>
      <div className={styles.left}>
        <Link to="/">
          <IconLemon />
        </Link>
        <Link to="/todo">ToDoList</Link>
      </div>
      <div className={styles.right}>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/" onClick={logout}>
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
