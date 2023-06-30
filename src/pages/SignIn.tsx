import styles from './auth.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useinput';
import { signInUser } from '../service/auth';
import { validEmail, validPassword } from '../components/common/utils/valid';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, emailhandler] = useInput('');
  const [password, passwordhandler] = useInput('');

  return (
    <main className={styles.wrap}>
      <h1>Sign in</h1>
      <form
        className={styles.form}
        onSubmit={async e => {
          e.preventDefault();
          await signInUser({ email: email, password: password });
          navigate('/todo');
        }}
      >
        <input
          type="email"
          data-testid="email-input"
          placeholder="이메일"
          value={email}
          onChange={emailhandler}
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="비밀번호"
          value={password}
          onChange={passwordhandler}
        />
        <button
          type="submit"
          data-testid="signin-button"
          disabled={!validEmail(email) || !validPassword(password)}
        >
          로그인
        </button>
      </form>
      <Link to="/signup" className={styles.link}>
        회원가입 하시겠습니까?
      </Link>
    </main>
  );
};

export default SignIn;
