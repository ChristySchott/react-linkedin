import React from 'react';

import { ReactComponent as Drop } from 'assets/profile/dropdown.svg'

import { Container, List, Item, Icon } from './styles';

const Lists: React.FC = () => {
    return <Container>
        <List>
            <Item>Sobre</Item>
            <Item>Diretrizes da Comunidade</Item>
            <Item>Termos e Privacidade <Icon><Drop /></Icon></Item>
            <Item>Soluções de Vendas</Item>
            <Item>Central de Segurança</Item>
        </List>
        <List>
            <Item>Acessibilidade</Item>
            <Item>Carreiras</Item>
            <Item>Preferências de anúncios</Item>
            <Item>Para celular</Item>
        </List>
        <List>
            <Item>Soluções de Talentos</Item>
            <Item>Soluçoes de Marketing</Item>
            <Item>Publicidade</Item>
            <Item>Pequenas empresas</Item>
        </List>
    </Container>;
}

export default Lists;