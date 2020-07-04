import React from 'react';

import {
  Container, Title, Text, Buttons,
} from './styles';
import Button from './Button';

const Welcome: React.FC = () => (
  <Container>
    <Title>
      <Text>Bem-vindo à sua comunidade profissional</Text>
    </Title>

    <Buttons>
      <Button text="Procure emprego" />
      <Button text="Encontre pessoas que você conhece" />
      <Button text="Aprenda novas competências" />
    </Buttons>
  </Container>
);

export default Welcome;
