import React from 'react';

import Container from './styles';
import Trends from './Trends';
import Promoted from './Promoted';
import Footer from './Footer';

const Main: React.FC = () => (
    <Container>
        <Trends />
        <Promoted />
        <Footer />
    </Container>
);

export default Main;
