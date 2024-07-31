import styled from 'styled-components';

export const StoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  font-size: 12px;
`;

export const HeroShot = styled.div`
  width: 100%;
  & .mainImage {
    width: 100%;
    height: auto;
  }
`;

export const ProductDiv = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #FFFFFF;
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;
