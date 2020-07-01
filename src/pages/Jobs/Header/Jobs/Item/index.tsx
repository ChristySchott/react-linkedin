import React, { ReactNode } from 'react';

import { Container, Icon, Text } from './styles';

interface Props {
    icon: ReactNode;
    text: string;
}

const Item: React.FC<Props> = ({ icon, text }) => (
    <Container>
        <Icon>{icon}</Icon>
        <Text>{text}</Text>
    </Container>
);

export default Item;
