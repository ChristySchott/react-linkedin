import React, { useEffect } from 'react';

import Container from './styles';
import Header from './Header';
import Spotlight from './Spotlight';
import Main from './Main';

const Premium: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <Container>
      <Header />
      <Spotlight />
      <Main />
    </Container>
  );
};

export default Premium;
