import React from 'react';

import Container from './styles';
import Header from './Header';
import Messages from './Messages';
import Write from './Write';
import Footer from './Footer';

const Chat: React.FC = () => (
    <Container>
        <Header />
        <Messages />
        <Write />
        <Footer />
    </Container>
);

export default Chat;
