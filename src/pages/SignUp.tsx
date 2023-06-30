import styles from './auth.module.scss';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useinput';
import { signUpUser } from '../service/auth';

const SignUp = () => {
  const [email, emailhandler] = useInput('');
  const [password, passwordhanlder] = useInput('');

  return (
    <main className={styles.wrap}>
      <h1>Sign up</h1>
      <form className={styles.form}>
        <input
          type="email"
          data-testid="email-input"
          value={email}
          onChange={emailhandler}
          placeholder="이메일"
        />
        <input
          type="password"
          data-testid="password-input"
          value={password}
          onChange={passwordhanlder}
          placeholder="비밀번호"
        />
        <button
          type="submit"
          data-testid="signup-button"
          disabled={!email.includes('@') || password.length < 8}
          onClick={async e => {
            e.preventDefault();
            await signUpUser({ email: email, password: password });
          }}
        >
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
