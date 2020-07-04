import React from 'react';

import Container from './styles';
import Records from './Records';
import Interact from './Interact';

const Actions: React.FC = () => (
    <Container>
        <Records />
        <Interact />
    </Container>
);

export default Actions;
