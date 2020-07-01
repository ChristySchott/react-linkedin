import React, { ReactNode } from 'react';
import Photo from './Photo';
import Info from './Info';

import Container from './styles';

interface Props {
    name: string;
    job: string;
    photo: ReactNode;
    color: string;
}

const Header: React.FC<Props> = ({ name, job, photo, color }) => (
    <Container>
        <Photo photo={photo} color={color} />
        <Info name={name} job={job} />
    </Container>
);

export default Header;
