import React from 'react';
import './App.scss';
import Container from '@material-ui/core/Container';

import Play from './components/Play';

const  App = () => (
  <Container maxWidth="sm">
    <div className="App">
      <Play />
    </div>
  </Container>
);

export default App;
