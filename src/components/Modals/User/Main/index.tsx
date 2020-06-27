import React from 'react';

import { Container, Exit } from './styles';
import List from './List';

const Main: React.FC = () => (
    <Container>
        <List title="Conta">
            <li>Configurações e privacidade</li>
            <li>Ajuda</li>
            <li>Idioma</li>
        </List>
        <List title="Gerenciar">
            <li>Publicações e atividades</li>
            <li>Conta de anúncio de vaga</li>
            <Exit>Sair</Exit>
        </List>
    </Container>
);

export default Main;
