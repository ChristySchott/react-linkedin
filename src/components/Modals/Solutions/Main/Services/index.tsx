import React from 'react';
import Item from './Item';

import Container from './styles';

const Services: React.FC = () => (
    <Container>
        <Item
            title="Soluções de Talentos"
            text="Encontre, atraia e recrute os melhores talentos"
        />
        <Item
            title="Soluções de Vendas"
            text="Descubra mais oportunidades de vendas"
        />
        <Item
            title="Anunciar vaga"
            text="Divulgue sua vaga aos candidatos mais qualificados"
        />
        <Item
            title="Soluções de Marketing"
            text="Conquiste clientes e divulgue seu negócio"
        />
        <Item
            title="Soluções de Aprendizagem"
            text="Capacite os seus funcionários"
        />
    </Container>
);

export default Services;
