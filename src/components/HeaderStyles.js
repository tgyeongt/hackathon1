import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import header from '/src/assets/header.png';
import backbutton from '/src/assets/backbutton.svg';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  overflow-y: scroll;
  width: 100%;
  margin: 0 auto;
  font-size: 12px;
  font-family: "Inter-Regular", sans-serif;
  color: #bdbdbd;
  @supports(-webkit-appearance:none) and (stroke-color:transparent) {
    min-height: -webkit-fill-available;
  }
  -ms-overflow-style: none;
`;

export const TutorialHeader = styled.div`
  width: 100%;
  height: 9vh;
  background-image: url(${header});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
`;

export const BackButton = styled.button`
  width: 20px;
  height: 20px;
  background-image: url("${backbutton}");
  background-size: 20px 20px;
  background-color: transparent;
  border: none;
  margin-top: 10px;
  margin-left: 20px;
  
  &:focus {
    outline: none;
  }
`;

export const NavBar = styled.div.attrs(props => ({
  style: {
    '--active-index': props.activeindex,
  }
}))`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  border-bottom: 2px solid #C9C9C9; 
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: calc(var(--active-index) * 20%);
    width: 20%; 
    height: 2px;
    background-color: #FF3E00; 
    transition: left 0.3s ease-out;
  }
`;

export const NavOption = styled(NavLink).attrs({ activeClassName: 'active' })`
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #C9C9C9;
  position: relative;
  text-decoration: none;

  &.active {
    color: #FF3E00;
  }
`;
