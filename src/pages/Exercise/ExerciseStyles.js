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
  width: 90%;
`;

export const MiniDiv = styled.div`
  width: 200px;
  height 70px;
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 5px 10px 0px;
`;

export const SubTitle = styled.div`
  font-size: 10px;
  color: #ABABAB
`

export const MainTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #353535
`

export const EngTitle = styled.span`
  font-size: 10px;
  color: #ABABAB
`

export const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 20px;
`;

export const AdvancedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const DetailDiv = styled.div`
  width: 100%;
  height: 121px;
  background-color: #D9D9D9;
  border-radius: 10px;
  margin-top: 10px;
`;

