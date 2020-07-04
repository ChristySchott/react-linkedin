import React from 'react';
import Wrapper from 'components/Wrapper';

import { ReactComponent as Medal } from 'assets/profile/medal.svg'

import { Container, Header, Text, Title, Private, Icon, Svg, Label, Line } from './styles';
import Content from './Content';

const Painel: React.FC = () => {
    return <Wrapper painel>
        <Container>
            <Header>
                <Text>
                    <Title>Seu painel</Title>
                    <Private>Privado</Private>
                </Text>
                <Icon>
                    <Svg><Medal /></Svg>
                    <Label>Campeão</Label>
                </Icon>
            </Header>
            <Content />
            <Line />
        </Container>
    </Wrapper>;
}

export default Painel;