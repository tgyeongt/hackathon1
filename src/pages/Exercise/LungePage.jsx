import React from 'react';
import { ExerciseContainer, HeroShot, MainTitle, MiniDivContainer, BasicContainer, AdvancedContainer } from './ExerciseStyles';
import BackButton from '../../components/BackButton';
import ExerciseCard from '../../components/ExerciseCard';
import StateCard from '../../components/StateCard';

import lungeMain from '/src/assets/lungemain.png';
import basicLunge from '/src/assets/exercise/lunge1.png'
import sideLunge from '/src/assets/exercise/lunge2.png'
import reverseLunge from '/src/assets/exercise/lunge3.png'

export default function LungePage() {
    return (
        <ExerciseContainer>
            <HeroShot>
                <BackButton/>
                <img className='mainImage' src={lungeMain}/>
            </HeroShot>
            <MiniDivContainer>
                <StateCard
                    text1="카테고리"
                    title="하체"
                    text2=" Lower"
                />
                <StateCard
                    text1="레벨"
                    title="초급자"
                    text2=" Beginner"
                />
            </MiniDivContainer>
            <BasicContainer>
                <MainTitle>베이직</MainTitle> 
                <ExerciseCard
                    img={basicLunge}
                    title="기본 런지"
                    text1="Basic Lunge"
                    text2="3set 10min"
                    navigateTo="/exercise/detail/4" 
                />
            </BasicContainer>
            <AdvancedContainer>
                 <MainTitle>응용 동작</MainTitle> 
                 <ExerciseCard
                    img={sideLunge}
                    title="사이드 런지"
                    text1="Side Lunge"
                    text2="3set 12min"
                    navigateTo="/exercise/detail/5" 
                />
                <ExerciseCard
                    img={reverseLunge}
                    title="리버스 런지"
                    text1="Reverse Lunge"
                    text2="3set 12min"
                    navigateTo="/exercise/detail/6"
                />
            </AdvancedContainer>
        </ExerciseContainer>
    );
}
