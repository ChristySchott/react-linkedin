import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ReactLogo } from 'assets/logo.svg';
import Container from './styles';

const Logo: React.FC = () => (
    <Container>
        <Link to="/">
            <ReactLogo />
        </Link>
    </Container>
);

export default Logo;
