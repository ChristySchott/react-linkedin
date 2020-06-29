import React from 'react';
import { Link } from 'react-router-dom';

import { Container, List, Item } from './styles';

const Terms: React.FC = () => (
    <Container>
        <List>
            <Item><Link to="/">Política de Privacidade</Link></Item>
            <Item><Link to="/">Contrato do Usuário</Link></Item>
            <Item><Link to="/">Política de Cookies</Link></Item>
            <Item><Link to="/">Política de Direitos Autorais</Link></Item>
        </List>
    </Container>
);

export default Terms;
