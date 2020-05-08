import React, { useState, useEffect } from 'react'

const Weather = ({ dataStatus }) => {

  const [ weather, setWeather ] = useState({
    city: {}
  })


  useEffect(() => {
    setWeather({
      city: dataStatus.city
    })
  },[dataStatus.city])

  console.log(weather.city)


  return (
    <div>
      Datos
    </div>
  )
}

export default Weather
