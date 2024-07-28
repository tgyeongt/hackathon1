import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ExerciseData from '/src/data/ExerciseData';
import StateCard from './StateCard';
// import YouTube from "react-youtube";

const PageContainer = styled.div`
  padding: 20px;
`;


const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #353535
`

const EngTitle = styled.span`
  font-size: 10px;
  color: #ABABAB
`

const CardList = styled.div `
  display: flex;
  justify-content: space-between;
  width: 90%;
`

const Content = styled.p`
  font-size: 12px;
  color: #353535;
`;

const TestButton = styled.button`
  padding: 10px;
  position: absolute;
  width: 150px;
  height: 38px;
  color: #FFFFFF;
  background-color: #FB8500;
  border: none;
  border-radius: 10px;

  &:focus {
    outline: none;
  }

`


const ExerciseDetailPage = () => {
  const { id } = useParams();
  const exercise = ExerciseData.find((item) => item.id === parseInt(id));

  if (!exercise) {
    return <PageContainer>운동 정보를 찾을 수 없습니다.</PageContainer>;
  }

  return (
    <PageContainer>

      <Title>{exercise.title}</Title>
      <EngTitle>{exercise.engtitle}</EngTitle>
      <CardList>
        <StateCard
          text1="시간"
          title="15분"
          text2=""
        />
        <StateCard
            text1="세트"
            title="3세트"
            text2=""
        />
      </CardList>
      
      <Content>{exercise.content}</Content>
      <TestButton>
        <p>자세측정하러가기</p>
      </TestButton>
    </PageContainer>
  );
};

export default ExerciseDetailPage;
