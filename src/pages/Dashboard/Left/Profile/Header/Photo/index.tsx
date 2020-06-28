import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as UserPicture } from 'assets/user.svg';

import { Container, Cover, User } from './styles';

const Photo: React.FC = () => (
    <Link to="/profile">
        <Container>
            <Cover />
            <User><UserPicture /></User>
        </Container>
    </Link>
);

export default Photo;
