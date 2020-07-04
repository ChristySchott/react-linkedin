import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Write } from 'assets/messages/write.svg';
import { ReactComponent as More } from 'assets/messages/more.svg';

import {
    Container, Content, Title, Icons, Icon,
} from './styles';

const Header: React.FC = () => (
    <Container>
        <Content>
            <Title>Mensagens</Title>
            <Icons>
                <Icon><Link to="/"><Write /></Link></Icon>
                <Icon><Link to="/"><More /></Link></Icon>
            </Icons>
        </Content>
    </Container>
);

export default Header;
