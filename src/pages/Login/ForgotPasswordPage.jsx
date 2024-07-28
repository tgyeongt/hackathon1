import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from './LoginStyles';
import BackButton from '../../components/BackButton';

const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 95vh;
  background-color: #f8f8f8;
  font-family: "Inter-Regular", sans-serif;
  color: #6A6A6A;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 10px;
`;

const Title = styled.h1`
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #6a6a6a;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #FB8500;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;

  &:focus {
    outline: none;
  }
`;

const ForgotPasswordPage = () => {
  const [id, setId] = useState('');

  const handlePasswordRecovery = () => {
    // 서버에서 비밀번호 가져오는 로직
    const recoveredPassword = "password123"; // 예시 비밀번호. 실제로는 서버에서 가져와야 함.
    alert(`아이디 ${id}의 비밀번호는: ${recoveredPassword}`);
  };

  return (
    <ForgotPasswordContainer>
      <Header>
        <BackButton/>
      </Header>
      <Title>비밀번호 찾기</Title>
      <br />
      <Input
        type="text"
        placeholder="아이디를 입력해주세요"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <SubmitButton onClick={handlePasswordRecovery}>완료</SubmitButton>
    </ForgotPasswordContainer>
  );
};

export default ForgotPasswordPage;
