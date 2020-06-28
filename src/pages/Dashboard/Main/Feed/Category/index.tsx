import React from 'react';

import { ReactComponent as CarretDown } from 'assets/main/carretDown.svg';
import { Container, Divider, Text } from './styles';

const Category: React.FC = () => (
    <Container>
        <Divider />
        <Text>
            <span>Classificar por:</span>
            <strong>Principais</strong>
            <CarretDown />
        </Text>
    </Container>
);

export default Category;
