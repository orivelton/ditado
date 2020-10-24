import React from 'react';
import Container from '@material-ui/core/Container';

import Play from './components/Play';
import Lang from './components/Lang';

const  App = () => (
  <>
    <Lang />
    <Container maxWidth="sm">
      <div className="App">
        <Play />
      </div>
    </Container>
  </>
);

export default App;
