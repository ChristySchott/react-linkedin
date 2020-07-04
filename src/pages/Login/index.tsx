import React from 'react';

import { Container } from './styles';
import Header from './Header';
import Researchs from './Researchs';
import Learn from './Learn';
import Vacancy from './Vacancy';
import Connect from './Connect';
import Footer from './Footer';

const Login: React.FC = () => (
  <Container>
    <Header />
    <Researchs />
    <Vacancy />
    <Learn />
    <Connect />
    <Footer />
  </Container>
);

export default Login;
