import React, { useEffect, useState } from 'react';
import styles from './auth.module.scss';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <main className={styles.wrap}>
      <h1>Sign up</h1>
      <form className={styles.form}>
        <input type="email" data-testid="email-input" placeholder="이메일" />
        <input
          type="password"
          data-testid="password-input"
          placeholder="비밀번호"
        />
        <button type="submit" data-testid="signup-button">
          회원가입
        </button>
      </form>
      <Link to="/signin" className={styles.link}>
        로그인 하시겠습니까?
      </Link>
    </main>
  );
};

export default SignUp;
