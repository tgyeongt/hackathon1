import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled(Link)`
  width: 210px;
  height: 260px;
  background-color: #FFFFFF;
  border-radius: 10px;
  margin: 10px 5px 0px 5px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-decoration: none;
`;

const ProductImage = styled.div`
  width: 100%;
  height: 60%;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.img || ''});
  background-size: cover;
  background-position: center;
  border-radius: 10px 10px 0 0;
  display: flex;
  box-sizing: border-box;
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  height: 40%;
  box-sizing: border-box;
`;

const CardTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #353535;
  margin-bottom: 5px;
`;

const CardSubTitle = styled.span`
  font-size: 10px;
  color: #A0A0A0;
  margin-bottom: 5px;
`;

const ContentDiv = styled.div`
  margin-top: 5px;
`

const CardContent1 = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #353535;
`;

const CardContent2 = styled.span`
  width: 60px;
  margin-left: 5px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 10px;
  color: #A0A0A0;
  background-color: #EEEEEE;
  border-radius: 5px;
`;

const ProductCard = ({ img, text1, text2, text3, text4, navigateTo }) => {
  return (
    <CardContainer to={navigateTo}>
      <ProductImage img={img} />
      <CardDetails>
        <CardTitle>{text1}</CardTitle>
        <CardSubTitle>{text2}</CardSubTitle>
        <ContentDiv>
          <CardContent1>{text3}</CardContent1>
          <CardContent2>{text4}</CardContent2>
        </ContentDiv>
      </CardDetails>
    </CardContainer>
  );
};

export default ProductCard;
