import React from 'react';
import Wrapper from 'components/Wrapper';

import { Container, Title } from './styles';

interface Props {
    title: string;
}

const Box: React.FC<Props> = ({ title, children }) => (
    <Wrapper>
        <Container>
            <Title>{title}</Title>
        </Container>
        {children}
    </Wrapper>
);

export default Box;
