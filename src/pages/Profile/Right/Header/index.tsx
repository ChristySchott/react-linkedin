import React from 'react';

import { Container, WrapperImage } from './styles';
import Perfil from './Perfil';
import Publish from 'components/Publish';

const Header: React.FC = () => {
    return <Container>
        <Perfil />
        <WrapperImage>
            <Publish footer={false} banner />
        </WrapperImage>
    </Container>;
}

export default Header;