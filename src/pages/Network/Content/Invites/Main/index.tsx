import React from 'react';

import { Container } from './styles';
import Header from './Header';
import Content from './Content';
import Sugestions from './Sugestions';
import Connections from './Connections';

const Main: React.FC = () => {
    return <Container>
        <Header />
        <Content />
        <Sugestions />
        <Connections />
    </Container>;
}

export default Main;