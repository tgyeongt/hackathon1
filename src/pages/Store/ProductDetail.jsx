import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { productData } from './ProductData';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
`;

const ProductTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
`;

const ProductSubTitle = styled.h2`
  font-size: 20px;
  color: #777;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  color: #333;
`;

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.navigateTo === `/product/${id}`);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <DetailContainer>
      <ProductImage src={product.img} alt={product.text1} />
      <ProductTitle>{product.text1}</ProductTitle>
      <ProductSubTitle>{product.text2}</ProductSubTitle>
      <ProductPrice>{product.text4}</ProductPrice>
      <ProductPrice>{product.text3}</ProductPrice>
    </DetailContainer>
  );
};

export default ProductDetail;
