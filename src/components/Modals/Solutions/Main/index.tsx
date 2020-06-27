import React from 'react';

import Container from './styles';
import Card from './Card';
import AnotherSolution from './AnotherSolution';
import Services from './Services';

const Main: React.FC = () => (
    <Container>
        <Card title="Conheça outras soluções do LinkedIn"><AnotherSolution /></Card>
        <Card title="Serviços empresariais do LinkedIn"><Services /></Card>
    </Container>
);

export default Main;
