import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled(Link)`
  width: 100%;
  height: 121px;
  background-color: #D9D9D9;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  text-decoration: none;
`;

const VideoContainer = styled.div`
  width: 40%;
  background-image: url(${(props) => props.img || ''});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  width: 60%;
  height: 121px;
  border-radius: 10px;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #353535;
  margin: 0;
`;

const CardContent = styled.p`
  font-size: 10px;
  color: #353535;
`;

const ExerciseCard = ({ img, title, content, navigateTo }) => {
  return (
    <CardContainer to={navigateTo}>
        <VideoContainer img={img}>
        {/* 재생버튼 */}
        </VideoContainer>
      <TextContainer>
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
      </TextContainer>
    </CardContainer>
  );
};

export default ExerciseCard;
