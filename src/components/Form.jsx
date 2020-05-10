import React, { useState } from 'react'
import styled from '@emotion/styled'

import Error from './Error'

const FormContainer = styled.form`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto 2rem auto;
  padding: 2rem;
  text-align: center;
  border-radius: 0.5rem;
  background-color: #916dd5;
  color: #fff;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  text-align: left;
  font-size: 2rem;
  font-weight: 600;

  &:nth-of-type(2) {
    margin-top: 3rem;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: #fff;
`;

const Select = styled.select`
  display: block;
  font-size: 1rem;
  background-color: #fff;
`;

const Button = styled.button`
  margin-top: 4rem;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  transition: 0.5s ease;
  cursor: pointer;
  color: #fff;
  background-color: #0779e4;


  &:hover {
    transition: 0.5s ease;
    background-color: #3e206d;
  }
`;

const Form = ({ inputForm, setInputForm, setButtonSubmit, setLoading }) => {

  const { city, country } = inputForm

  //Form Validation Status
  const [error, setError] = useState(false)

  //Read Input of Form and save the State App
  const handleChange = e => {
    setInputForm({
      ...inputForm,
      [e.target.name] : e.target.value
    })
  }

  //Read State of Button Submit Form and save the State App
  const handleSubmit = e => {
    e.preventDefault()

    //Validate Form
    if(city.trim() === '' || country.trim() === '') {
      setError(true)
      return
    }
    setError(false)

    //Save the State App
    setButtonSubmit(true)
    setLoading(true)
  }

  return (
    <FormContainer
      onSubmit={handleSubmit}
    >
      {error ? <Error message='Todos los campos son obligatorios'/> : null}
      <Label>Ciudad:</Label>
        <Input
          type='text'
          placeholder='Madrid'
          name='city'
          value={city}
          onChange={handleChange}
        />

      <Label htmlFor='country'>País:</Label>
        <Select
          id='country'
          name='country'
          value={country}
          onChange={handleChange}
        >
          <option value=''>-- Selecciona --</option>
          <option value='de'>Alemania</option>
          <option value='ar'>Argentina</option>
          <option value='br'>Brasil</option>
          <option value='cl'>Chile</option>
          <option value='co'>Colombia</option>
          <option value='cr'>Costa Rica</option>
          <option value='ec'>Ecuador</option>
          <option value='es'>España</option>
          <option value='us'>Estados Unidos</option>
          <option value='fr'>Francia</option>
          <option value='mx'>México</option>
          <option value='py'>Paraguay</option>
          <option value='pe'>Perú</option>
          <option value='pt'>Portugal</option>
          <option value='ve'>Venezuela</option>
        </Select>

      <Button type='submit'>Consultar</Button>
    </FormContainer>
  )
}

export default Form;
