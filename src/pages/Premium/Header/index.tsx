import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoIcon } from 'assets/premium/logo.svg';

import {
  Container, Content, Logo, Text,
} from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Link to="/dashboard">
        <Logo><LogoIcon /></Logo>
      </Link>
      <Text>Voltar para o LinkedIn.com</Text>
    </Content>
  </Container>
);

export default Header;
