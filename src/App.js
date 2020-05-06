import React from 'react';
import { Global, css } from '@emotion/core'

import Header from './components/Header';

function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            box-sizing: content-box;
          }
        `}
      />
      <Header />
    </>
  );
};

export default App;
