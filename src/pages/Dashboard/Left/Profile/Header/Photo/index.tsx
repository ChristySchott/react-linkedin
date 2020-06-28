import React from 'react';

import { ReactComponent as UserPicture } from 'assets/user.svg';

import { Container, Cover, User } from './styles';

const Photo: React.FC = () => (
    <Container>
        <Cover />
        <User><UserPicture /></User>
    </Container>
);

export default Photo;
