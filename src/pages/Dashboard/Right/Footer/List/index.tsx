import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as More } from 'assets/right/more.svg';
import { Container, Items, Item } from './styles';

const List: React.FC = () => (
    <Container>
        <Items>
            <Item><Link to="/">Sobre</Link></Item>
            <Item><Link to="/">Acessibilidade</Link></Item>
            <Item><Link to="/">Central de ajuda</Link></Item>
            <Item>
                <Link to="/">
                    Termos e Privacidade
                    <span><More /></span>
                </Link>
            </Item>
            <Item><Link to="/">Preferências de anúncios</Link></Item>
            <Item><Link to="/">Publicidade</Link></Item>
            <Item>
                <Link to="/">
                    Serviços empresariais
                    <span><More /></span>
                </Link>
            </Item>
            <Item><Link to="/">Baixe o aplicativo do LinkedIn</Link></Item>
            <Item><Link to="/">Mais</Link></Item>
        </Items>
    </Container>
);

export default List;
