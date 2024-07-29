import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

import emptyIcon from '/src/assets/emptyheart.png';
import fullIcon from '/src/assets/fullheart.png';
import squat from '/src/assets/squat.png';
import lunge from '/src/assets/lunge.png';
import pushup from '/src/assets/pushup.png';

const TutorialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  font-size: 12px;
`;

const ExerciseList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  gap: 20px;
  width: 100%;
`;

const ExerciseCard = styled.div`
  width: 90%;
  cursor: pointer;
  position: relative;
  margin: 0 auto;
  align-items: center;

  & .cardImage {
    width:100%;
  }
  
`;

const LikeButton = styled.button`
  position: absolute;
  top: 15px;
  left: 10px;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  z-index: 10;

  &:focus {
    outline: none;
  }

  img {
    width: 22px;
    height: 20px;
  }
`;

export default function AllPage() {
    const [liked, setLiked] = useState([false, false, false]);

    const handleLikeClick = (index) => {
        setLiked(prevLiked => {
            const newLiked = [...prevLiked];
            newLiked[index] = !newLiked[index];
            return newLiked;
        });
    };

    const exercises = [
        { image: squat, name: 'squat', path: '/exercise/squat' },
        { image: lunge, name: 'lunge', path: '/exercise/lunge' },
        { image: pushup, name: 'pushup', path: '/exercise/pushup' }
    ];

    return (
        <TutorialContainer>
            <ExerciseList>
                {exercises.map((exercise, index) => (
                    <ExerciseCard key={index}>
                        <Link to={exercise.path}>
                            <img className='cardImage' src={exercise.image} alt={exercise.name} />
                        </Link>
                        <LikeButton onClick={() => handleLikeClick(index)}>
                            <img src={liked[index] ? fullIcon : emptyIcon} alt="like" />
                        </LikeButton>
                    </ExerciseCard>
                ))}
            </ExerciseList>
        </TutorialContainer>
    );
}
