import React from 'react';

import { ReactComponent as Right } from 'assets/login/right.svg';

import { Container, Content, Text, Icon } from './styles';

interface Props {
    text: string;
}

const Button: React.FC<Props> = ({ text }) => {
    return <Container>
        <Content>
            <Text>{text}</Text>
            <Icon><Right /></Icon>
        </Content>
    </Container>;
}

export default Button;