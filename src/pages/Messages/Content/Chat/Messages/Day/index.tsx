import React from 'react';

import { Container, Divider, Time } from './styles';

interface Props {
    day: string;
}

const Day: React.FC<Props> = ({ day }) => (
    <Container>
        <Divider />
        <Time><span>{day}</span></Time>
        <Divider />
    </Container>
);

export default Day;
