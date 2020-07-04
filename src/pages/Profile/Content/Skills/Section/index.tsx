import React from 'react';

import { ReactComponent as MoreIcon } from 'assets/profile/pencilBig.svg';

import { Container, Header, Infos, Title, Icon, Content, Actions, Add, Test } from './styles';

interface Props {
    title: string;
}

const Section: React.FC<Props> = ({ children, title }) => {
    return <Container>
        <Header>
            <Infos>
                <Title>{title}</Title>
                <Actions>
                    <Add>Adicionar nova competência</Add>
                    <Icon><MoreIcon /></Icon>
                </Actions>
            </Infos>
            <Test>Fazer teste de competência</Test>
        </Header>
        <Content>
            {children}
        </Content>
    </Container>;
}

export default Section;