import React from 'react'
import styled from '@emotion/styled'

const Hero = styled.header`
  width: 100%;
  height: 12rem;
  margin-bottom: 4rem;
  text-align: center;
  position: relative;
  background-color: #4cbbb9;
`;

const Wave = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  background-color: #4cbbb9;


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
    right: 0;
    top: 63%;
    background-color: #eff3c6;
  }

  &::after {
    width: 55%;
    height: 100%;
    left: 0;
    top: 32%;
    background-color: #4cbbb9;
  }
`;

const TitleHeader = styled.h1`
  margin: 0;
  padding-top: 2.5rem;
  font-size: 2.5rem;
  color: #eff3c6;
`;

const Header = () => {
  return (
    <Hero>
      <TitleHeader>Weather App</TitleHeader>
      <Wave />
    </Hero>
  )
}

export default Header
