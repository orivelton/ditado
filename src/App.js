import React from 'react';
import Container from '@material-ui/core/Container';

import Play from './components/Play';
import Lang from './components/Lang';

const  App = () => (
  <Container maxWidth="sm">
    <div className="App">
      <Lang />
      <Play />
    </div>
  </Container>
);

export default App;
