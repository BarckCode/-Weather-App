import React, { useState, useEffect } from 'react'
import { Global, css } from '@emotion/core'

import Header from './components/Header'
import Form from './components/Form'
import Weather from './components/Weather'
import Error from './components/Error'

const App = () => {

  //State Input user of Form
  const [inputForm, setInputForm] = useState({
    city: '',
    country: '',
  })

  //State Button Submit of form
  const [buttonSubmit, setButtonSubmit] = useState(false)

  //API Data State
  const [dataStatus, setDataStatus] = useState({})

  //API Data Status Error
  const [error, setError] = useState(false)

  useEffect(() => {
    const consultAPI = async () => {
      if(buttonSubmit) {
        const { city, country } = inputForm
        const apiKey = 'ce1bddd595a612a3eaf37041a313e5ce'
        const API = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}`

        const response = await fetch(API)
        const data = await response.json()

        setDataStatus(data)
        setButtonSubmit(false)

        if (dataStatus.cod === '404'){
          setError(true)
        } else {
          setError(false)
        }
      }
    }
    consultAPI()
  },[buttonSubmit, dataStatus.cod, inputForm])

  let weatherComponent
  error ?
    weatherComponent = <Error message='Datos incorrectos' />
    :
    weatherComponent = <Weather dataStatus={dataStatus.length === 0 ? null : dataStatus} />

  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            box-sizing: border-box;
            font-family: 'Open Sans', sans-serif;
          }

          body {
            background-color: #eff3c6;
          }
        `}
      />
      <Header />
      <Form
        inputForm={inputForm}
        setInputForm={setInputForm}
        setButtonSubmit={setButtonSubmit}
      />
      <section>
        {weatherComponent}
      </section>
    </>
  )
}

export default App
