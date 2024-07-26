import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExerciseContainer, HeroShot } from './ExerciseStyles';
import squatMain from '/src/assets/squatmain.png';


export default function SquatPage() {
    return (
        <ExerciseContainer>
            <HeroShot>
                <img className='mainImage' src={squatMain}/>
            </HeroShot>
        </ExerciseContainer>
    );
}
