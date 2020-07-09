import React from 'react';
import Container from '@material-ui/core/Container';

import Play from './components/Play';
import Header from './components/Header';

const  App = () => (
  <>
    <Header />
    <Container maxWidth="sm">
      <div className="App">
        <Play />
      </div>
    </Container>
  </>
);

export default App;
