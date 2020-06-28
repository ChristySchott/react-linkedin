import React from 'react';

import Container from './styles';
import Records from './Records';
import Premium from './Premium';

const Main: React.FC = () => (
    <Container>
        <Records />
        <Premium />
    </Container>
);

export default Main;
