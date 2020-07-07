import React from 'react';

import { ReactComponent as Premium } from 'assets/premium/premium.svg';
import { ReactComponent as Image } from 'assets/premium/background.svg';

import {
  Container, Content, Logo, Text, Background,
} from './styles';

const Spotlight: React.FC = () => (
  <Container>
    <Content>
      <Logo><Premium /></Logo>
      <Text>Destaque seu perfil e saia na frente com uma conta Premium.</Text>
    </Content>
    <Background><Image /></Background>
  </Container>
);

export default Spotlight;
