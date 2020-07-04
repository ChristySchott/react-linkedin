import React from 'react';

import { Container, Title, Text, Content } from './styles';

interface Props {
    title: string;
}

const List: React.FC<Props> = ({ title, children }) => {
    return <Container>
        <Title>
            <Text>{title}</Text>
        </Title>
        <Content>{children}</Content>
    </Container>;
}

export default List;