import React from 'react';

import { ReactComponent as UserOne } from 'assets/main/one.svg';
import { ReactComponent as UserTwo } from 'assets/main/two.svg';
import { ReactComponent as UserThree } from 'assets/main/three.svg';

import { Container, List } from './styles';
import Invite from './Invite';
import ShowMore from './ShowMore';

const Content: React.FC = () => {
    return <Container>
        <List>
            <Invite
                image={<UserOne />}
                name="Hebiro Nadir Plihenar"
                job="Diretor Comercial"
            />
            <Invite
                image={<UserTwo />}
                name="Taigeoge Pueba de Fonseca"
                job="Full Stack Developer"
            />
            <Invite
                image={<UserThree />}
                name="Lyes Saceu de Canar"
                job="Desenvolvedor Flutter at Company - Software House"
            />
        </List>
        <ShowMore />
    </Container>;
}

export default Content;