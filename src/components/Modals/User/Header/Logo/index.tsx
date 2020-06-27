import React from 'react';

import { ReactComponent as User } from 'assets/profile.svg';
import Container from './styles';

const Logo: React.FC = () => (
    <Container>
        <User />
    </Container>
);

export default Logo;
