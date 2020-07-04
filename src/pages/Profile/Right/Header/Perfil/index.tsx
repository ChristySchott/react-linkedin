import React from 'react';

import { ReactComponent as Info } from 'assets/profile/info.svg'

import { Container, Item, Text, Icon, Hr } from './styles';

const Perfil: React.FC = () => {
    return <Container>
        <Item>
            <Text>Editar perfil público e URL</Text>
            <Icon><Info /></Icon>
        </Item>
        <Hr />
        <Item>
            <Text>Adicionar perfil em outro idioma</Text>
            <Icon><Info /></Icon>
        </Item>
    </Container>;
}

export default Perfil;