import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EngTitle, ExerciseContainer, HeroShot, MainTitle, MiniDiv, SubTitle, MiniDivContainer, BasicContainer, AdvancedContainer, DetailDiv } from './ExerciseStyles';
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
                 <SubTitle>카테고리</SubTitle>
                 <br />
                 <MainTitle>하체</MainTitle>
                 <EngTitle> Lower</EngTitle>
                </MiniDiv>
                <MiniDiv>
                 <SubTitle>레벨</SubTitle>
                 <br />
                 <MainTitle>중급자</MainTitle>
                 <EngTitle> Intermediate</EngTitle>
                </MiniDiv>
            </MiniDivContainer>
            <BasicContainer>
                <MainTitle>베이직</MainTitle> 
                <DetailDiv>

                </DetailDiv>
            </BasicContainer>
            <AdvancedContainer>
                 <MainTitle>응용 동작</MainTitle> 
                 <DetailDiv>

                 </DetailDiv>


            </AdvancedContainer>
            
        </ExerciseContainer>
    );
}
