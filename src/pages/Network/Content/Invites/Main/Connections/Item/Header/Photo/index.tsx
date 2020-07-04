import React from 'react';

import { Link } from 'react-router-dom';


import { Container, Cover, User } from './styles';

interface Props {
    photo: string;
    color: string;
}

const Photo: React.FC<Props> = ({ photo, color }) => (
    <Link to="/profile">
        <Container>
            <Cover color={color} />
            <User><img src={photo} alt="" /></User>
        </Container>
    </Link>
);

export default Photo;
