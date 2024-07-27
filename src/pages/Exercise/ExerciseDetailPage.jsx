import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// 스타일 정의 (필요에 따라 수정)
const PageContainer = styled.div`
  padding: 20px;
  font-family: "Inter-Regular", sans-serif;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #353535;
`;

const Content = styled.p`
  font-size: 16px;
  color: #353535;
`;

const ExerciseDetailPage = () => {
  const { id } = useParams(); // URL에서 id를 가져옵니다

  // 실제 애플리케이션에서는 id를 사용하여 데이터 조회 로직을 추가합니다.
  // 여기는 id를 출력하는 예제입니다.
  return (
    <PageContainer>
      <Title>운동 상세 페이지</Title>
      <Content>선택한 운동의 ID: {id}</Content>
      {/* 상세 정보 내용은 실제 데이터에 따라 다릅니다. */}
    </PageContainer>
  );
};

export default ExerciseDetailPage;
