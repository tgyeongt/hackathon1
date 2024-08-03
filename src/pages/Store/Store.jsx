import React, { useState } from 'react';
import styled from 'styled-components';

import BrandGroup from "./BrandGroup";
// import SearchBar from "./SearchBar";
// import BackButton from "./BackButton";
import BrandLogo from "./BrandLogo";

// import storeMain from '@images/store/storemain.png';
// import AllLogo from '@images/store/logo/all.svg';
// import LivfitLogo from '@images/store/logo/livfit.svg'; 
// import NikeLogo from '@images/store/logo/nike.svg'; 
// import AdidasLogo from '@images/store/logo/adidas.svg';
// import PumaLogo from '@images/store/logo/puma.svg';
// import UnderarmourLogo from '@images/store/logo/underarmour.svg';

const StoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  padding-bottom: 70px;
`;

const HeroShot = styled.div`
  position: relative;
  width: 100%;
  & .mainImage {
    width: 100%;
    height: auto;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    flex: 0 0 auto;
    margin-right: 10px;
  }
`;


const Store = () => {
  const [selectedBrand, setSelectedBrand] = useState('all');

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <StoreContainer>
      {/* <HeroShot>
        <BackButton />
        <img className='mainImage' src={storeMain} alt="Store Main" />
      </HeroShot> */}
        {/* <SearchBar /> */}
        {/* <LogoContainer>
          <BrandLogo logo={AllLogo} onClick={() => handleBrandClick('all')} isSelected={selectedBrand === 'all'} />
          <BrandLogo logo={LivfitLogo} onClick={() => handleBrandClick('livfit')} isSelected={selectedBrand === 'livfit'} />
          <BrandLogo logo={NikeLogo} onClick={() => handleBrandClick('nike')} isSelected={selectedBrand === 'nike'} />
          <BrandLogo logo={AdidasLogo} onClick={() => handleBrandClick('adidas')} isSelected={selectedBrand === 'adidas'} />
          <BrandLogo logo={PumaLogo} onClick={() => handleBrandClick('puma')} isSelected={selectedBrand === 'puma'} />
          <BrandLogo logo={UnderarmourLogo} onClick={() => handleBrandClick('underarmour')} isSelected={selectedBrand === 'underarmour'} />
        </LogoContainer> */}
        <BrandGroup selectedBrand={selectedBrand} />
    </StoreContainer>
  );
};

export default Store;
