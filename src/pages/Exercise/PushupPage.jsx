import React from 'react';
import { ExerciseContainer, HeroShot, MainTitle, MiniDivContainer, BasicContainer, AdvancedContainer } from './ExerciseStyles';
import BackButton from '../../components/BackButton';
import ExerciseCard from '../../components/ExerciseCard';
import StateCard from '../../components/StateCard';

import pushupMain from '/src/assets/pushupmain.png';
import basicPushup from '/src/assets/exercise/pushup1.png'
import KneePushup from '/src/assets/exercise/pushup2.png'
import diamondPushup from '/src/assets/exercise/pushup3.png'

export default function PushupPage() {
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
                    img={basicPushup}
                    title="기본 푸시업"
                    text1="Basic Push-Up"
                    text2="3set 8min"
                    navigateTo="/exercise/detail/7" 
                />
            </BasicContainer>
            <AdvancedContainer>
                 <MainTitle>응용 동작</MainTitle> 
                 <ExerciseCard
                    img={KneePushup}
                    title="니 푸시업"
                    text1="Knee Push-Up"
                    text2="3set 8min"
                    navigateTo="/exercise/detail/8" 
                />
                <ExerciseCard
                    img={diamondPushup}
                    title="다이아몬드 푸시업"
                    text1="Diamond Push-Up"
                    text2="3set 10min"
                    navigateTo="/exercise/detail/9"
                />
            </AdvancedContainer>
        </ExerciseContainer>
    );
}
