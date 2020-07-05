import React from 'react';

import { ReactComponent as LogoIcon } from 'assets/premium/logo.svg';

import {
  Container, Content, Logo, Text,
} from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Logo><LogoIcon /></Logo>
      <Text>Voltar para o LinkedIn.com</Text>
    </Content>
  </Container>
);

export default Header;
