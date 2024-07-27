import React from 'react';
import { EngTitle, ExerciseContainer, HeroShot, MainTitle, MiniDiv, SubTitle, MiniDivContainer, BasicContainer, AdvancedContainer } from './ExerciseStyles';
import BackButton from '../../components/BackButton';
import squatMain from '/src/assets/squatmain.png';
import ExerciseCard from '../../components/ExerciseCard';

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
                <ExerciseCard
                    title="기본 스쿼트"
                    content="3set 15min"
                    navigateTo="/exercise/detail/1" // ID를 포함한 경로
                />
            </BasicContainer>
            <AdvancedContainer>
                 <MainTitle>응용 동작</MainTitle> 
                 <ExerciseCard
                    title="하프 스쿼트"
                    content="3set 15min"
                    navigateTo="/exercise/detail/2" // ID를 포함한 경로
                />
                <ExerciseCard
                    title="와이드 스쿼트"
                    content="3set 15min"
                    navigateTo="/exercise/detail/3" // ID를 포함한 경로
                />
            </AdvancedContainer>
        </ExerciseContainer>
    );
}
