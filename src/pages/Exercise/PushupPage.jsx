import React from 'react';
import { ExerciseContainer, HeroShot, MainTitle, MiniDivContainer, BasicContainer, AdvancedContainer } from './ExerciseStyles';
import BackButton from '../../components/BackButton';
import pushupMain from '/src/assets/pushupmain.png';
import ExerciseCard from '../../components/ExerciseCard';
import StateCard from '../../components/StateCard';

export default function SquatPage() {
    return (
        <ExerciseContainer>
            <HeroShot>
                <BackButton/>
                <img className='mainImage' src={pushupMain}/>
            </HeroShot>
            <MiniDivContainer>
                <StateCard
                    text1="카테고리"
                    title="상체"
                    text2=" Upper"
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
                    img={pushupMain}
                    title="기본 푸시업"
                    text1="Basic Push-Up"
                    text2="3set 8min"
                    navigateTo="/exercise/detail/7" // ID를 포함한 경로
                />
            </BasicContainer>
            <AdvancedContainer>
                 <MainTitle>응용 동작</MainTitle> 
                 <ExerciseCard
                    title="니 푸시업"
                    text1="Knee Push-Up"
                    text2="3set 8min"
                    navigateTo="/exercise/detail/8" // ID를 포함한 경로
                />
                <ExerciseCard
                    title="다이아몬드 푸시업"
                    text1="Diamond Push-Up"
                    text2="3set 10min"
                    navigateTo="/exercise/detail/9" // ID를 포함한 경로
                />
            </AdvancedContainer>
        </ExerciseContainer>
    );
}
