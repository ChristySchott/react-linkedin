import React from 'react';
import Wrapper from 'components/Wrapper';

import Content from './Content';

import { Container, Header, Text, Title, Followers, Number, Action, Icon, Label } from './styles';

const Activities: React.FC = () => {
    return <Wrapper>
        <Container>
            <Header>
                <Text>
                    <Title>Atividades</Title>
                    <Followers>
                        <Number>6.137 seguidores</Number>
                        <Action>Gerenciar seguidores</Action>
                    </Followers>
                </Text>
                <Icon>
                    <Label>Visualizar tudo</Label>
                </Icon>
            </Header>
            <Content />
        </Container>
    </Wrapper>;
}

export default Activities;