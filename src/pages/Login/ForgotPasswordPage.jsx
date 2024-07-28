import React, { useState } from 'react';

const ForgotPasswordPage = () => {
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 비밀번호 찾기 로직 추가
  };

  return (
    <div>
      <h2>비밀번호 찾기</h2>
      <form onSubmit={handleSubmit}>
        <label>
          아이디:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </label>
        <button type="submit">비밀번호 찾기</button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
