import React from 'react';
import { ReactComponent as LogoIcon } from 'assets/profile/logo.svg';
import Lists from './Lists';
import Actions from './Actions';

import {
  Container, Logo, Main, List, Action, Copyright,
} from './styles';

const Footer: React.FC = () => (
  <Container>
    <Logo><LogoIcon /></Logo>
    <Main>
      <List>
        <Lists />
      </List>
      <Action>
        <Actions />
      </Action>
    </Main>
    <Copyright><p>LinkedIn Corporation &copy; 2020</p></Copyright>
  </Container>
);

export default Footer;
