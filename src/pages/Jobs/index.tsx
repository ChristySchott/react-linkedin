import React, { useEffect } from 'react';

import Container from './styles';
import Header from './Header';
import Main from './Main';

const Jobs: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
};

export default Jobs;
