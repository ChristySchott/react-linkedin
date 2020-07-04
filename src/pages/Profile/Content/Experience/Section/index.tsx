import React from 'react';

import { ReactComponent as MoreIcon } from 'assets/profile/more.svg';

import { Container, Header, Title, Icon, Content } from './styles';

interface Props {
    title: string;
}

const Section: React.FC<Props> = ({ children, title }) => {
    return <Container>
        <Header>
            <Title>{title}</Title>
            <Icon><MoreIcon /></Icon>
        </Header>
        <Content>
            {children}
        </Content>
    </Container>;
}

export default Section;