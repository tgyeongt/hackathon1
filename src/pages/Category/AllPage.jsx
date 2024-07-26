import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TutorialContainer, ExerciseList, ExerciseCard, LikeButton,
} from '../TutorialStyles';
import emptyIcon from '/src/assets/emptyheart.png';
import fullIcon from '/src/assets/fullheart.png';
import squat from '/src/assets/squat.png';
import lunge from '/src/assets/lunge.png';
import calfraise from '/src/assets/calfraise.png';

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
        { image: calfraise, name: 'calfraise', path: '/exercise/calfraise' }
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
