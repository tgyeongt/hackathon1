// src/components/ForgotPasswordPage.js
import React, { useState } from 'react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 비밀번호 찾기 로직 추가
    alert(`비밀번호 찾기 요청이 ${email}로 전송되었습니다.`);
  };

  return (
    <div>
      <h2>비밀번호 찾기</h2>
      <form onSubmit={handleSubmit}>
        <label>
          이메일 주소:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">비밀번호 찾기</button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
