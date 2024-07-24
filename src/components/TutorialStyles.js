import styled, { css, keyframes } from 'styled-components';
import header from '/src/assets/header.png';
import backbutton from '/src/assets/backbutton.svg';
import squat from '/src/assets/squat.png';
import lunge from '/src/assets/lunge.png';
import calfraise from '/src/assets/calfraise.png';

export const TutorialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  font-size: 12px;
  font-family: "Inter-Regular", sans-serif;
  color: #bdbdbd;
`;

export const TutorialHeader = styled.div`
  width: 100%;
  height: 90px;
  background-image: url(${header});
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const BackButton = styled.button`
  width: 20px;
  height: 20px;
  background-image: url(${backbutton});
  background-size: 20px 20px;
  background-color: transparent;
  border: none;
  margin-top: 10px;
  margin-left: 30px;
  
  &:focus {
    outline: none;
  }
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
  position: relative;
`;

const slideIn = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const NavOption = styled.div`
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: ${props => (props.active ? '#FF3E00' : '#C9C9C9')};
  position: relative;

  ${props =>
    props.active &&
    css`
      &::after {
        content: '';
        display: block;
        margin: 0 auto;
        width: ${props => (props.active ? '100%' : '0')};
    padding-top: 10px;
    border-bottom: 2px solid #FF3E00;
    animation: ${props => (props.active ? slideIn : 'none')} 0.3s ease-out;
      }
    `}
`;

export const ExerciseList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const ExerciseCard = styled.div`
  width: 400px;
  height: 224px;
  background-color: #FFFFFF;
  cursor: pointer;
  background-size: 400px 224px;
  background-position: center;
  position: relative;

  &:nth-child(1) {
    background-image: url(${squat});
  }

  &:nth-child(2) {
    background-image: url(${lunge});
  }

  &:nth-child(3) {
    background-image: url(${calfraise});
  }
`;

export const LikeButton = styled.button`
  position: absolute;
  top: 15px;
  right: 25px;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  img {
    width: 22px;
    height: 20px;
  }
`;