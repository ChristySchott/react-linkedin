import React from 'react';

import {
  Container, Content, Text, Title, Button,
} from './styles';

const Vacancy: React.FC = () => (
  <Container>
    <Content>
      <Text>
        <Title>Anuncie sua vaga e encontre os candidatos certos</Title>
      </Text>

      <Button>
        Anuncie uma vaga
      </Button>
    </Content>
  </Container>
);

export default Vacancy;
