import React from 'react';

import {
    Container, Title, Items,
} from './styles';

interface Props {
    title: string;
}

const List: React.FC<Props> = ({ title, children }) => (
    <Container>
        <Title>{title}</Title>
        <Items>
            {children}
        </Items>
    </Container>
);

export default List;
