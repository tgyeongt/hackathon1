import React from 'react';
import { ExerciseContainer, HeroShot, MainTitle, MiniDivContainer, BasicContainer, AdvancedContainer } from './ExerciseStyles';
import BackButton from '../../components/BackButton';
import squatMain from '/src/assets/squatmain.png';
import ExerciseCard from '../../components/ExerciseCard';
import StateCard from '../../components/StateCard';

export default function SquatPage() {
    return (
        <ExerciseContainer>
            <HeroShot>
                <BackButton/>
                <img className='mainImage' src={squatMain}/>
            </HeroShot>
            <MiniDivContainer>
                <StateCard
                    text1="카테고리"
                    title="하체"
                    text2=" Lower"
                />
                <StateCard
                    text1="레벨"
                    title="중급자"
                    text2=" Intermediate"
                />
            </MiniDivContainer>
            <BasicContainer>
                <MainTitle>베이직</MainTitle> 
                <ExerciseCard
                    title="기본 스쿼트"
                    text1="Basic Squat"
                    text2="3set 15min"
                    navigateTo="/exercise/detail/1" // ID를 포함한 경로
                />
            </BasicContainer>
            <AdvancedContainer>
                 <MainTitle>응용 동작</MainTitle> 
                 <ExerciseCard
                    title="하프 스쿼트"
                    text1="Half Squat"
                    text2="3set 15min"
                    navigateTo="/exercise/detail/2" // ID를 포함한 경로
                />
                <ExerciseCard
                    title="와이드 스쿼트"
                    text1="Wide Squat"
                    text2="3set 15min"
                    navigateTo="/exercise/detail/3" // ID를 포함한 경로
                />
            </AdvancedContainer>
        </ExerciseContainer>
    );
}
