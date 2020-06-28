import React from 'react';
import Photo from './Photo';
import Info from './Info';

import Container from './styles';

const Header: React.FC = () => (
    <Container>
        <Photo />
        <Info />
    </Container>
);

export default Header;
