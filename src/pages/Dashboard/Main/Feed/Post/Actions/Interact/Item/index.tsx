import React from 'react';

import { Container, Icon, Text } from './styles';

interface Props {
    text: string;
}

const Item: React.FC<Props> = ({ text, children }) => (
    <Container>
        <Icon>{children}</Icon>
        <Text>{text}</Text>
    </Container>
);

export default Item;
