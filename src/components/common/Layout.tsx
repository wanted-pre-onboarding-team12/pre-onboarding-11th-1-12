import React from 'react';
import styles from './layout.module.scss';
import { Link, Outlet } from 'react-router-dom';
import Nav from './Nav';
import { IconGithub } from '../../assets';

const Layout = () => {
  return (
    <div className={styles.wrap}>
      <Nav />
      <Outlet />
      <Link
        to="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12"
        target="_blank"
        className={styles.footer}
      >
        <span>원티드 프리온보딩 FE 11기 1주차 12팀 과제</span>
        <IconGithub />
      </Link>
    </div>
  );
};

export default Layout;
