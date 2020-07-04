import React from 'react';

import Container from './styles';
import User from './User';
import About from './About';
import Carousel from './Carousel';
import Painel from './Painel';
import Activities from './Activities';
import Experience from './Experience';
import Skills from './Skills';
import Achievements from './Achievements';
import Interests from './Interests';

const Content: React.FC = () => (
  <Container>
    <User />
    <About />
    <Carousel />
    <Painel />
    <Activities />
    <Experience />
    <Skills />
    <Achievements />
    <Interests />
  </Container>

);

export default Content;
