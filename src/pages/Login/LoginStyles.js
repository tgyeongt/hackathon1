import styled from 'styled-components';
import uncheckedImg from "/src/assets/unchecked.svg";
import checkedImg from "/src/assets/checked.svg";
import googleLogo from '/src/assets/g-logo.png';
import naverLogo from '/src/assets/n-logo.png';
import kakaoLogo from '/src/assets/k-logo.png';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  font-size: 12px;
  font-family: "Inter-Regular", sans-serif;
  color: #6A6A6A;
`;

export const LoginBox = styled.div`
  padding: 40px;
  background-color: white;
  border-radius: 8px;
  align-items: center;
  width: 400px;
`;

export const LogoDiv = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 80px;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 50px;
  margin-bottom: 10px;
  padding-left: 25px;
  background-color: #f7f7f7;
  border: none;
  border-radius: 32px;
  box-shadow: inset -1px 2px 4px -2px rgba(0, 0, 0, 0.08);

  &:focus {
    outline: none;
  }
`;

export const LoginButton = styled.button`
  height: 50px;
  margin-bottom: 10px;
  background-color: #FB8500;
  color: white;
  border: none;
  border-radius: 32px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const KeepLoggedIn = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Checkbox = styled.input`
  display: none;

  &:checked + label {
    background: url("${checkedImg}") no-repeat;
  }
`;

export const CheckboxLabel = styled.label`
  background: url("${uncheckedImg}") no-repeat;
  width: 15px;
  height: 15px;
  display: inline-block;
  cursor: pointer;
  margin-right: 5px;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  color: #6A6A6A;
  margin-bottom: 20px;

  a {
    color: #6A6A6A;
    text-decoration: none;

    &:hover {
      color: #ff702a;
    }
  }
`;

export const SnsLogin = styled.div`
display
  margin-top: 20px;
`;

export const SnsButtons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

export const SnsButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd;
  border: none;
  cursor: pointer;
  background-size: cover;
  background-position: center;

  &.snsButton1 {
    background-image: url(${googleLogo});
  }

  &.snsButton2 {
    background-image: url(${naverLogo});
  }

  &.snsButton3 {
    background-image: url(${kakaoLogo});
  }

  &:focus {
    outline: none;
  }
`;
