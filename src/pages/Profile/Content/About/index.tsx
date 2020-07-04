import React from 'react';
import Wrapper from 'components/Wrapper';

import { ReactComponent as Pencil } from 'assets/profile/pencilBig.svg'

import { Container, Header, Title, Button, Content, Text } from './styles';

const About: React.FC = () => {
    return <Wrapper>
        <Container>
            <Header>
                <Title>Sobre</Title>
                <Button><Pencil /></Button>
            </Header>
            <Content>
                <Text>Em formação no curso Técnico em Informática, sou apaixonado por programar e busco sempre evoluir na área, seja estudando ou colocando o conhecimento em prática, tudo com foco no Desenvolvimento Front-end. Penso que gostar do que faz é um diferencial para qualquer um se dar bem na carreira profissional e pessoal, e felizmente...</Text>
            </Content>
        </Container>
    </Wrapper>;
}

export default About;