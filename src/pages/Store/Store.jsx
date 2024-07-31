import React from 'react';
import { StoreContainer, HeroShot, ProductList, ProductDiv } from './StoreStyles';
import BackButton from '../../components/BackButton';
import storeMain from '/src/assets/store/storemain.png';
import ProductCard from './ProductCard';
import { productData } from './ProductData';

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
