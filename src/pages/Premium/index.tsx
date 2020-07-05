import React from 'react';

import Container from './styles';
import Header from './Header';
import Spotlight from './Spotlight';
import Main from './Main';

const Premium: React.FC = () => (
  <Container>
    <Header />
    <Spotlight />
    <Main />
  </Container>
);

export default Premium;
