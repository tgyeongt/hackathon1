import styled, { css } from 'styled-components';
import header from '/src/assets/header.png';
import backbutton from '/src/assets/backbutton.png';
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
  width: 500px;
  height: 90px;
  background-image: url(${header});
  background-size: 500px 90px;
  background-repeat: no-repeat;
  margin-bottom: 20px;
`;

export const BackButton = styled.button`
  width: 20px;
  height: 20px;
  background-image: url(${backbutton});
  background-size: 20px 20px;
  background-color: transparent;
  border: none;
  margin-top: 35px;
  margin-left: 35px;
  
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

export const NavOption = styled.div`
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: ${props => (props.active ? '#FF3E00' : '#C9C9C9')};
  
  ${props =>
    props.active &&
    css`
      &::after {
        content: '';
        display: block;
        margin: 0 auto;
        width: 50%;
        padding-top: 10px;
        border-bottom: 2px solid #FF3E00;
        animation: slide 0.3s ease-out;
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
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  img {
    width: 14px;
    height: 13px;
  }
`;

export const ExerciseText = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  text-shadow: 1px 1px 2px black;
`;

export const ExerciseTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: orange;
`;

export const ExerciseDescription = styled.div`
  font-size: 12px;
`;