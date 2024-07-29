import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import header from '/src/assets/header.png';

const TutorialHeader = styled.div`
  width: 100%;
  height: 9vh;
  background-image: url(${header});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
`;

import BackButton from '../../components/BackButton';

export default function Header() {

  return (
      <TutorialHeader>
        <BackButton/>
      </TutorialHeader>
  );
}
