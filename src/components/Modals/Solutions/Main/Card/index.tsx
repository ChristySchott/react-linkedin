import React from 'react';

import {
    Container, Title, Divider, Content,
} from './styles';

interface Props {
    title: string;
}

const Card: React.FC<Props> = ({ title, children }) => (
    <Container>
        <Title>{title}</Title>
        <Divider />
        <Content>{children}</Content>
    </Container>
);
export default Card;
