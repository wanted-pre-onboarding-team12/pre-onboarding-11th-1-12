import React from "react";
import styles from "./auth.module.scss";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <main className={styles.wrap}>
      <h1>Sign in</h1>
      <form className={styles.form}>
        <input type="email" data-testid="email-input" placeholder="이메일" />
        <input
          type="password"
          data-testid="password-input"
          placeholder="비밀번호"
        />
        <button type="submit" data-testid="signin-button">
          로그인
        </button>
        <Link to="/signup" className={styles.link}>
          회원가입 하시겠습니까?
        </Link>
      </form>
    </main>
  );
};

export default SignIn;
