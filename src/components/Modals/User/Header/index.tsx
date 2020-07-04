import React from 'react';

import { Container, User, Profile } from './styles';
import Logo from './Photo';
import Info from './Info';
import CTA from './CTA';

const Header: React.FC = () => (
  <Container>
    <User>
      <Logo />
      <Info />
    </User>
    <Profile>
      <CTA />
    </Profile>
  </Container>
);

export default Header;
