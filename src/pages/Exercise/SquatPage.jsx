import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExerciseContainer, HeroShot, MiniDiv, MiniDivContainer } from './ExerciseStyles';
import BackButton from '../../components/BackButton';
import squatMain from '/src/assets/squatmain.png';
import CategoryLower from '/src/assets/CategoryLower.png';
import LevelMiddle from '/src/assets/LevelMiddle.png';




export default function SquatPage() {
    return (
        <ExerciseContainer>
            <HeroShot>
                <BackButton/>
                <img className='mainImage' src={squatMain}/>
            </HeroShot>
            <MiniDivContainer>
                <MiniDiv>
                    <img className='contentImage' src={CategoryLower} alt="" />
                </MiniDiv>
                <MiniDiv>
                    <img className='contentImage' src={LevelMiddle} alt="" />
                </MiniDiv>
            </MiniDivContainer>
            
        </ExerciseContainer>
    );
}
