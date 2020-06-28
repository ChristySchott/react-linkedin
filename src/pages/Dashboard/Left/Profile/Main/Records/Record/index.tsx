import React from 'react';

import { Container, Text, Number } from './styles';

interface Props {
    text: string;
    number: number;
}

const Record: React.FC<Props> = ({ text, number }) => (
    <Container>
        <Text>{text}</Text>
        <Number>{number}</Number>
    </Container>
);

export default Record;
