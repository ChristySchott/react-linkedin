import React from 'react';
import Promoted from './Promoted';
import Footer from './Footer';

import Container from './styles';

const Publish: React.FC = () => (
    <Container>
        <Promoted />
        <Footer />
    </Container>
);

export default Publish;
