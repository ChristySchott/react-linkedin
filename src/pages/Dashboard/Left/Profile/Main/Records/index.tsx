import React from 'react';
import Record from './Record';

import Container from './styles';

const Records: React.FC = () => (
    <Container>
        <Record text="Quem viu seu perfil" number={2.749} />
        <Record text="Viram seu vídeo" number={3.729} />
    </Container>
);

export default Records;
