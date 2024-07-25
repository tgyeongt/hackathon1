import React, { useState } from 'react';
import {
  TutorialContainer, ExerciseList, ExerciseCard, LikeButton,
} from './TutorialStyles';
import emptyIcon from '/src/assets/emptyheart.png';
import fullIcon from '/src/assets/fullheart.png';
import squat from '/src/assets/squat.png';
import lunge from '/src/assets/lunge.png';
import calfraise from '/src/assets/calfraise.png';
import Header from '../components/Header';

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

  const navOptions = ['전체', '하체', '상체', '코어', '스트레칭'];
  const activeIndex = navOptions.indexOf(selectedNav);

  return (
    <TutorialContainer>
      <Header/>
      <ExerciseList>
        {[squat, lunge, calfraise].map((exercise, index) => (
          <ExerciseCard key={index}>
            <img className='cardImage' src={exercise} alt="exercise"/>
            <LikeButton onClick={() => handleLikeClick(index)}>
              <img src={liked[index] ? fullIcon : emptyIcon} alt="like"/>
            </LikeButton>
          </ExerciseCard>
        ))}
      </ExerciseList>
    </TutorialContainer>
  );
};

export default Tutorial;
