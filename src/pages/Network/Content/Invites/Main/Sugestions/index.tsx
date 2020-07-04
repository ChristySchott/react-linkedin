import React from 'react';

import { Container } from './styles';
import Wrapper from 'components/Wrapper';
import Carousel from './Carousel';

const Sugestions: React.FC = () => (
    <Wrapper>
        <Container>
            <Carousel />
        </Container>
    </Wrapper>
)

export default Sugestions;