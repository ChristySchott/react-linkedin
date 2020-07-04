import React from 'react';
import Wrapper from 'components/Wrapper';

import Content from './Content';

import {
  Container, Header, Text, Title, Footer,
} from './styles';

const Interests: React.FC = () => (
  <Wrapper>
    <Container>
      <Header>
        <Text>
          <Title>Interesses</Title>
        </Text>
      </Header>
      <Content />
    </Container>
    <Footer>
      <span>Visualizar todos</span>
    </Footer>
  </Wrapper>
);

export default Interests;
