import React from 'react';

import { ReactComponent as Logo } from 'assets/right/logo.svg';
import { Container, Content } from './styles';

const Copyright: React.FC = () => (
    <Container>
        <Content>
            <span><Logo /></span>
        LinkedIn Corporation © 2020
        </Content>
    </Container>
);

export default Copyright;
