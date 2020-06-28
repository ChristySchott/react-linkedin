import React from 'react';

import Container from './styles';
import Copyright from './Copyright';
import List from './List';

const Footer: React.FC = () => (
    <Container>
        <List />
        <Copyright />
    </Container>
);

export default Footer;
