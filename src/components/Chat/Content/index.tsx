import React from 'react';
import Header from './Header';

import { Container } from './styles';
import Chats from './Chats';

const Content: React.FC = () => {
    return <Container>
        <Header />
        <Chats />
    </Container>;
}

export default Content;