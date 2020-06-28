import React from 'react';

import Sticky from 'react-stickynode';
import Container from './styles';
import Trends from './Trends';
import Promoted from './Promoted';
import Footer from './Footer';

const Main: React.FC = () => (
    <Container>
        <Trends />
        <Sticky top={60}>
            <Promoted />
            <Footer />
        </Sticky>
    </Container>
);

export default Main;
