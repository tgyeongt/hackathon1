import styled, { css, keyframes } from 'styled-components';
import category from '/src/assets/category.png';
import level from '/src/assets/level.png';



export const ExerciseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  font-size: 12px;
  font-family: "Inter-Regular", sans-serif;
  background-color: #F6F6F6
`;

export const HeroShot = styled.div`
  position: relative;
  width: 100%;
  
  & .mainImage {
    width: 100%;
    height: auto;
  }
`;

export const MiniDivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 20px;
`;

export const MiniDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;

  & .contentImage {
    width: 100%;
    height: auto;
  }
`


