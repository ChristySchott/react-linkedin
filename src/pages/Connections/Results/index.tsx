import React from 'react';

import Wrapper from 'components/Wrapper';
import Container from './styles';
import Sugestions from './Sugestions';
import Feedback from './Feedback';
import Menu from './Menu';

const Results: React.FC = () => (
  <Wrapper>
    <Container>
      <Sugestions />
      <Feedback />
      <Menu />
    </Container>
  </Wrapper>
);

export default Results;
