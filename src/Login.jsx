import React, { useState } from 'react';
import styles from './Login.module.css'; 

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 로직 추가
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <img src="/src/assets/logo.png" alt="logo" className={styles.logo} />
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.loginButton}>로그인</button>
          <div className={styles.keepLoggedIn}>
            <input
              type="checkbox"
              id="keepLoggedIn"
              checked={keepLoggedIn}
              onChange={(e) => setKeepLoggedIn(e.target.checked)}
              className={styles.checkbox}
            />
            <label htmlFor="keepLoggedIn"></label>
            <label>로그인 상태 유지</label>
          </div>
          <div className={styles.links}>
            <a href="/find-id">아이디 찾기</a>
            <span> | </span>
            <a href="/find-password">비밀번호 찾기</a>
            <span> | </span>
            <a href="/signup">회원가입</a>
          </div>
          <div className={styles.snsLogin}>
            <span>SNS로 로그인하기</span>
            <div className={styles.snsButtons}>
              <button className={`${styles.snsButton} ${styles.snsButton1}`}></button>
              <button className={`${styles.snsButton} ${styles.snsButton2}`}></button>
              <button className={`${styles.snsButton} ${styles.snsButton3}`}></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
