import { NavLink, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import {
  HeaderContainer, TutorialHeader, NavBar, NavOption
} from './HeaderStyles';

import BackButton from './BackButton';

export default function Header() {
  const navOptions = [
    { name: '전체', path: '/' },
    { name: '하체', path: '/lower' },
    { name: '상체', path: '/upper' },
    { name: '코어', path: '/core' },
    { name: '스트레칭', path: '/stretching' }
  ];

  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentIndex = navOptions.findIndex(option => option.path === location.pathname);
    setActiveIndex(currentIndex);
  }, [location, navOptions]);

  return (
    <HeaderContainer>
      <TutorialHeader>
        <BackButton/>
      </TutorialHeader>
      <NavBar activeindex={activeIndex}>
        {navOptions.map(option => (
          <NavOption
            key={option.name}
            to={option.path}
          >
            {option.name}
          </NavOption>
        ))}
      </NavBar>
    </HeaderContainer>
  );
}
