import React from 'react';

import { Container, Content, Invites, BoxShow, Show } from './styles';

const Header: React.FC = () => {
    return <Container>
        <Content>
            <Invites>Convites</Invites>
            <BoxShow><Show>Visualizar todos os 4</Show></BoxShow>
        </Content>
    </Container>;
}

export default Header;