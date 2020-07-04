import React from 'react';

import Container from './styles';
import Jobs from './Jobs';
import Search from './Search';
import Carousel from './Carousel';

const Header: React.FC = () => (
    <Container>
        <Jobs />
        <Search />
        <Carousel />
    </Container>
);

export default Header;
