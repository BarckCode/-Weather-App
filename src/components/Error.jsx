import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 60%;
  margin: 0 auto 1rem auto;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #f40552;
`;

const Error = ({ message }) => {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  )
}

export default Error
