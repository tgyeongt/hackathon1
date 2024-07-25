import React, { useState } from 'react';
import {
  TutorialContainer, ExerciseList, ExerciseCard, LikeButton,
} from './TutorialStyles';
import emptyIcon from '/src/assets/emptyheart.png';
import fullIcon from '/src/assets/fullheart.png';
import squat from '/src/assets/squat.png';
import lunge from '/src/assets/lunge.png';
import calfraise from '/src/assets/calfraise.png';

const exercises = [
    { name: 'Squat', image: squat },
    { name: 'Lunge', image: lunge },
    { name: 'Calf Raise', image: calfraise },
    // 다른 운동들도 여기에 추가
  ];

export default function LowerPage() {
    const [liked, setLiked] = useState([false, false, false]);
    
    const handleLikeClick = (index) => {
        setLiked(prevLiked => {
          const newLiked = [...prevLiked];
          newLiked[index] = !newLiked[index];
          return newLiked;
        });
    };

    return(
        <TutorialContainer>
         <ExerciseList>
            {exercises.map((exercise, index) => (
                <ExerciseCard key={index}>
                    <img className='cardImage' src={exercise.image} alt={exercise.name} />
                    <LikeButton onClick={() => handleLikeClick(index)}>
                     <img src={liked[index] ? fullIcon : emptyIcon} alt="like" />
                    </LikeButton>
                </ExerciseCard>
            ))}
         </ExerciseList>
        </TutorialContainer>
    )
}