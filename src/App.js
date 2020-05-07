import React, { useState } from 'react'
import { Global, css } from '@emotion/core'

import Header from './components/Header'
import Form from './components/Form'

const App = () => {

  //State Input user of Form
  const [inputForm, setInputForm] = useState({
    city: '',
    country: '',
  })

  //State Button Submit of form
  const [buttonSubmit, setButtonSubmit] = useState(false)

  console.log(buttonSubmit)
  console.log(inputForm)
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
    </>
  )
}

export default App
