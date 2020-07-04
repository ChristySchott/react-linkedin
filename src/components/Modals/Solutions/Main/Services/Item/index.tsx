import React from 'react';

import { ListItem, Title, Text } from './styles';

interface Props {
    title: string;
    text: string;
}

const Item: React.FC<Props> = ({ title, text }) => (
    <ListItem>
        <Title>{title}</Title>
        <Text>{text}</Text>
    </ListItem>
);

export default Item;
