import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

const Bottom: React.FC = () => (
    <Container>
        <Content>
            <span>Melhore suas notificações</span>
            <Link to="/">Visualizar configurações</Link>
        </Content>
    </Container>
);

export default Bottom;
