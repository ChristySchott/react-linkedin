import React from 'react';

import { Container, Title } from './styles';
import Sugestions from './Sugestions';

const Main: React.FC = () => {
    return <Container>
        <Title>Adicione novas competências com estes cursos, gratuitos por 24 horas</Title>
        <Sugestions />
    </Container>;
}

export default Main;