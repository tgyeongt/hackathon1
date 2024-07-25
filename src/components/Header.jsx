import { NavLink, Link } from "react-router-dom";
import {
    TutorialHeader, BackButton, NavBar, NavOption,
  } from '/src/pages/TutorialStyles';

const navOptions = ['전체', '하체', '상체', '코어', '스트레칭'];
const activeIndex = navOptions.indexOf(selectedNav);

export default function Header() {
    return (
        <>
            <TutorialHeader>
                <BackButton />
            </TutorialHeader>
            <NavBar activeIndex={activeIndex}>
                {navOptions.map(option => (
                <NavOption
                    key={option}
                    active={selectedNav === option}
                    onClick={() => handleNavClick(option)}>
                    {option}
                </NavOption>
            ))}
            </NavBar>
        </>
     
    );
}