import React from 'react';

import { Container, Title } from './styles';
import Sugestions from './Sugestions';
import Courses from './Courses';

const Main: React.FC = () => {
    return <Container>
        <Title>As pessoas também viram</Title>
        <Sugestions />
        <Courses />
    </Container>;
}

export default Main;