import React from 'react';
import styled from 'styled-components';
import BackButton from '../../components/BackButton';
import storeMain from '/src/assets/store/storemain.png';
import ProductCard from './ProductCard';
import { productData } from './ProductData';

const StoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  font-size: 12px;
`;

const HeroShot = styled.div`
  width: 100%;
  & .mainImage {
    width: 100%;
    height: auto;
  }
`;

const ProductDiv = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #FFFFFF;
  margin-top: 5px;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;


export default function Store() {
    return (
        <StoreContainer>
            <HeroShot>
                <BackButton />
                <img className='mainImage' src={storeMain} alt="Store Main" />
            </HeroShot>
            <ProductDiv>
                <ProductList>
                    {productData.map((product, index) => (
                        <ProductCard
                            key={index}
                            img={product.img}
                            text1={product.text1}
                            text2={product.text2}
                            text3={product.text3}
                            text4={product.text4}
                            navigateTo={product.navigateTo}
                        />
                    ))}
                </ProductList>
            </ProductDiv>

        </StoreContainer>
    );
}
