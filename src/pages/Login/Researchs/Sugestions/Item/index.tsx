import React from 'react';

import { Container, Text } from './styles';

interface Props {
    name: string;
}

const Item: React.FC<Props> = ({ name }) => (
  <Container>
    <Text>{name}</Text>
  </Container>
);

export default Item;
