import React from 'react';
import Profile from './Profile';
import Social from './Social';

import Container from './styles';

const Left: React.FC = () => (
    <Container>
        <Profile />
        <Social />
    </Container>
);

export default Left;
