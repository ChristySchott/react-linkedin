import React from 'react';

import { Container, Title } from './styles';
import Wrapper from 'components/Wrapper';
import Items from './Items';

const Main: React.FC = () =>
    <Wrapper>
        <Container>
            <Title>Com base no seu perfil</Title>
            <Items />
        </Container>
    </Wrapper>;

export default Main;