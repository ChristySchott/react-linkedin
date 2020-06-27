import React from 'react';

import { Container, Box, Name } from './styles';

interface Props {
    name: string;
}

const Item: React.FC<Props> = ({ name, children }) => (
    <Container>
        <Box>{children}</Box>
        <Name>{name}</Name>
    </Container>
);

export default Item;
