import React, { ReactNode } from 'react';

import { Link } from 'react-router-dom';


import { Container, Cover, User } from './styles';

interface Props {
    photo: ReactNode;
    color: string;
}

const Photo: React.FC<Props> = ({ photo, color }) => (
    <Link to="/profile">
        <Container>
            <Cover color={color} />
            <User>{photo}</User>
        </Container>
    </Link>
);

export default Photo;
