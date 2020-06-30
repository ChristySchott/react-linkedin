import React from 'react';
import Wrapper from 'components/Wrapper';
import Chat from './Chat';
import Conversations from './Conversations';

import Container from './styles';

const Content: React.FC = () => (
    <Wrapper>
        <Container>
            <Conversations />
            <Chat />
        </Container>
    </Wrapper>
);

export default Content;
