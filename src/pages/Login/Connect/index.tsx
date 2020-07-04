import React from 'react';

import { ReactComponent as BackIcon } from 'assets/login/background.svg';

import {
  Container, Background, Content, Title, Text, Button,
} from './styles';

const Connect: React.FC = () => (
  <Container>
    <Background><BackIcon /></Background>
    <Content>
      <Title>
        <Text>Conecte com seus colegas de trabalho, de classe e amigos no LinkedIn</Text>
      </Title>

      <Button>Comece já</Button>
    </Content>
  </Container>
);

export default Connect;
