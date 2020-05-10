import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import logoImage from '../assets/Logo.svg'
import humidityImage from '../assets/humidity.svg'
import cloudsImage from '../assets/clouds.svg'
import windImage from '../assets/wind.svg'

const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto 1.5rem auto;
  padding: 2rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(62,32,109,0.4);
  -moz-box-shadow: 0px 0px 5px 1px rgba(62,32,109,0.4);
  box-shadow: 0px 0px 5px 1px rgba(62,32,109,0.4);
  background-color: #d89cf6;
  color: #3e206d;
`;

const FigureLogo = styled.figure`
  width: 100%;
`;

const ImageLogo = styled.img`
  width: 40%;
  max-width: 400px;
  margin: 0 auto 0.5rem auto;
`;

const ContainerData = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #fff;
`;

const Paragraph = styled.p`
  padding-top: 0.5rem;
`;

const SpanContainer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SpanImage = styled.img`
  width: 44px;
`;

const DateContainer = styled.div`
  padding-top: 0.5rem;
`;

const Weather = ({ dataStatus }) => {

  const [weatherData, setWeatherData] = useState({
    cod: "",
    list: [{
      main: {
        temp: 0,
        humidity: 0,
      },
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0,
      },
      dt_txt: "",
    }],
    city: {
      name: "",
    },
  })

  useEffect(() => {
    setWeatherData(dataStatus)
  }, [dataStatus])


  let name
  let temp
  let humidity
  let clouds
  let wind
  let date
  if (weatherData.city === undefined) {
    return null
  } else {
    name = weatherData.city.name

    //Modificando la posición del Array weatherData.list[ X ] vamos de 3h en 3h desde el día actual[0] hasta recorrer 40 posiciones en el Array
    //Ciclo de horas: 00:00 - 03:00 - 06:00 - 09:00 - 12:00 - 15:00 - 18:00 - 21:00 - 00:00
    //Documentación: https://openweathermap.org/forecast5 || https://openweathermap.org/forecast5#name5
    const dataList = weatherData.list[0]

    if (dataList === undefined) {
      return null
    } else {
      //Temperatura en Grados Kelvin. Formula de Transformación a ºC => grados_kelvin - 273.15
      // parseFloat(Parseamos estos datos a punto flotante).toFixed(Indicamos el Nº de decimales)
      temp = parseFloat(dataList.main.temp - 273.15).toFixed(2)
      humidity = dataList.main.humidity
      clouds = dataList.clouds.all
      //Velocidad en metros/segundo. Para pasar a km/hora. Formula: 1 metro/seg = 3,6 km/h
      wind = parseFloat(dataList.wind.speed * 3,6).toFixed(0)
      date = dataList.dt_txt
    }
  }

  return (
    <Container>
      <FigureLogo>
        <ImageLogo src={logoImage} alt='Logo'/>
      </FigureLogo>
      <ContainerData>
        <h3>{name}</h3>
        <Paragraph>{temp}<span>&#x2103;</span></Paragraph>
        <div>
          <SpanContainer>
            <SpanImage src={humidityImage} alt='Humidity'/>
            <Paragraph>{humidity}%</Paragraph>
          </SpanContainer>
          <SpanContainer>
            <SpanImage src={cloudsImage} alt='Cloudiness'/>
            <Paragraph>{clouds}%</Paragraph>
          </SpanContainer>
          <SpanContainer>
            <SpanImage src={windImage} alt='Wind'/>
            <Paragraph>{wind}km/h</Paragraph>
          </SpanContainer>
        </div>
        <DateContainer>
          <h4>Previsión hasta:</h4>
          {date}
        </DateContainer>
      </ContainerData>
    </Container>
  )
}

export default Weather
