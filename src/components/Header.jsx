import React from 'react';
import styled from '@emotion/styled';

const Hero = styled.header`
  text-align: center;
  background-color: #4cbbb9;
  position: relative;
  height: 20rem;
`;

const Wave = styled.div`
  height: 120px;
  width: 100%;
  background: #4cbbb9;
  position: absolute;
  bottom: 0;

  &::before{
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
  }

  &::before {
    width: 55%;
    height: 109%;
    background-color: #fff;
    right: -1.5%;
    top: 60%;
  }

  &::after {
    width: 55%;
    height: 100%;
    background-color: #4cbbb9;
    left: -1.5%;
    top: 40%;
  }
`;

const TitleHeader = styled.h1`
  margin: 0;
  color: #F7F7F7;
`;

const Header = () => {
  return (
    <Hero>
      <TitleHeader>Header</TitleHeader>
      <Wave />
    </Hero>
  );
};

export default Header;
