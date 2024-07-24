import React, { useState } from 'react';
import {
  TutorialContainer, TutorialHeader, BackButton, NavBar, NavOption, ExerciseList, ExerciseCard, LikeButton,
} from './TutorialStyles';
import likeIcon from '/src/assets/emptyheart.svg';
import likedIcon from '/src/assets/fullheart.svg';

const Tutorial = () => {

  const [selectedNav, setSelectedNav] = useState('전체');
  const [liked, setLiked] = useState([false, false, false]);

  const handleNavClick = (option) => {
    setSelectedNav(option);
  };

  const handleLikeClick = (index) => {
    setLiked(prevLiked => {
      const newLiked = [...prevLiked];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });
  };

  return (
    <TutorialContainer>
      <TutorialHeader>
        <BackButton />
      </TutorialHeader>
      <NavBar>
        {['전체', '하체', '상체', '코어', '스트레칭'].map(option => (
          <NavOption
            key={option}
            active={selectedNav === option}
            onClick={() => handleNavClick(option)}
          >
            {option}
          </NavOption>
        ))}
      </NavBar>
      <ExerciseList>
        {['Card1', 'Card2', 'Card3'].map((card, index) => (
          <ExerciseCard key={card}>
            <LikeButton
              onClick={() => handleLikeClick(index)}
              liked={liked[index]}
            >
              <img src={liked[index] ? likedIcon : likeIcon} alt="like" />
            </LikeButton>
          </ExerciseCard>
        ))}
      </ExerciseList>
    </TutorialContainer>
  );
};

export default Tutorial;
