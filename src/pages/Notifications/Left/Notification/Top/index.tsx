import React from 'react';

import {
    Container, Content, Title, Text,
} from './styles';

const Top: React.FC = () => (
    <Container>
        <Content>
            <Title>Notificações</Title>
            <Text>Você tem novas notificações</Text>
        </Content>
    </Container>
);

export default Top;
