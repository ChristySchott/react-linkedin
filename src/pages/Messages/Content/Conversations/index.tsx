import React from 'react';
import Header from './Header';
import Search from './Search';
import Chats from './Chats';

import Container from './styles';

const Conversations: React.FC = () => (
    <Container>
        <Header />
        <Search />
        <Chats />
    </Container>
);

export default Conversations;
