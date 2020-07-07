import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as IconLogo } from 'assets/login/logo.svg';
import Welcome from './Welcome';

import {
  Container, Content, Nav, Logo, Buttons, SignUp, SignIn, Hero, Image,
} from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Nav>
        <Logo>
          <IconLogo />
        </Logo>

        <Buttons>
          <SignUp>Cadastre-se agora</SignUp>
          <Link to="/dashboard">
            <SignIn>Entrar</SignIn>
          </Link>
        </Buttons>
      </Nav>

      <Hero>
        <Welcome />
        <Image>
          <img src="https://static-exp1.licdn.com/sc/h/3m4tgpbdz7gbldapvl63mrnxz" alt="" />
        </Image>
      </Hero>
    </Content>
  </Container>
);

export default Header;
