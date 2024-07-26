import styled, { css, keyframes } from 'styled-components';

export const TutorialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  font-size: 12px;
  font-family: "Inter-Regular", sans-serif;
`;


export const ExerciseList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const ExerciseCard = styled.div`
  width: 90%;
  cursor: pointer;
  position: relative;
  margin: 0 auto;
  align-items: center;


  & .cardImage {
    width:100%;
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

  z-index: 10;

  &:focus {
    outline: none;
  }

  img {
    width: 22px;
    height: 20px;
  }
`;