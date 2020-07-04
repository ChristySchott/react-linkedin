import React from 'react';

import { ReactComponent as Connect } from 'assets/login/connect.svg';
import { ReactComponent as Skills } from 'assets/login/learn.svg';
import { ReactComponent as Drop } from 'assets/profile/drop.svg';

import { Container, Content, Card, Image, Title, Text, Button, BoxInput, Input, Icon } from './styles';

const Learn: React.FC = () => {
    return <Container>
        <Content>
            <Card>
                <Image><Connect /></Image>

                <Title>
                    <Text>Conecte-se a pessoas que podem ajudar</Text>
                </Title>

                <Button>
                    Encontre pessoas conhecidas
                </Button>
            </Card>

            <Card>
                <Image><Skills /></Image>

                <Title>
                    <Text>Aprenda as competências que podem ajudar você agora</Text>
                </Title>

                <BoxInput>
                    <Input type="text" placeholder="Selecione um tópico" />
                    <Icon><Drop /></Icon>
                </BoxInput>
            </Card>
        </Content>
    </Container>;
}

export default Learn;