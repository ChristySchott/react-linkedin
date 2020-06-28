import React from 'react';

import Container from './styles';
import Trends from './Trends';
import Promoted from './Promoted';

const Main: React.FC = () => (
    <Container>
        <Trends />
        <Promoted />
    </Container>
);

export default Main;
