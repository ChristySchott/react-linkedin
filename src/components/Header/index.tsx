import React from 'react';

import { Container, Content } from './styles';
import Search from './Search';
import Nav from './Nav';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Search />
      <Nav />
    </Content>
  </Container>
);

export default Header;
