import React from 'react';

import { ReactComponent as Expand } from 'assets/messages/expand.svg';

import {
    Container, Content, Input, Icon,
} from './styles';

const Write: React.FC = () => (
    <Container>
        <Content>
            <Input
                type="text"
                placeholder="Escreva a mensagem..."
                name="message"
            />
            <Icon><Expand /></Icon>
        </Content>
    </Container>
);

export default Write;
