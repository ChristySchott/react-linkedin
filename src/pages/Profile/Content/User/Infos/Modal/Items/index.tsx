import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/profile/modals/logo.svg';
import { ReactComponent as Sites } from 'assets/profile/modals/sites.svg';
import { ReactComponent as Phone } from 'assets/profile/modals/phone.svg';
import { ReactComponent as Email } from 'assets/profile/modals/email.svg';
import { ReactComponent as Cake } from 'assets/profile/modals/cake.svg';

import {
  Container, Template, Image, Text, Name, Sub, Info,
} from './styles';

const Items: React.FC = () => (
  <Container>

    <Template>
      <Image><Logo /></Image>
      <Text>
        <Name>Seu perfil</Name>
        <Sub><Link to="/dashboard">linkedin.com/in/christy-hauschild-0757431a4</Link></Sub>
      </Text>
    </Template>

    <Template>
      <Image><Sites /></Image>
      <Text>
        <Name>Sites</Name>
        <Sub>
          <Link to="/dashboard">christyschott.github.io/portfolio.github.io/</Link>
          {' '}
          <Info> (Portfólio)</Info>
        </Sub>
        <Sub>
          <Link to="/dashboard">github.com/ChristySchott</Link>
          {' '}
          <Info> (Site pessoal)</Info>
        </Sub>
      </Text>
    </Template>

    <Template>
      <Image><Phone /></Image>
      <Text>
        <Name>Telefone</Name>
        <Sub>
          51 996585057
          <Info>(Residencial)</Info>
        </Sub>
      </Text>
    </Template>

    <Template>
      <Image><Email /></Image>
      <Text>
        <Name>E-mail</Name>
        <Sub><Link to="/dashboard">christyhauschild@gmail.com</Link></Sub>
      </Text>
    </Template>

    <Template>
      <Image><Cake /></Image>
      <Text>
        <Name>Aniversário</Name>
        <Sub>17 de maio</Sub>
      </Text>
    </Template>
  </Container>
);

export default Items;
