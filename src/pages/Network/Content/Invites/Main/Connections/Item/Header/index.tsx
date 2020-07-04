import React from 'react';
import Photo from './Photo';
import Info from './Info';

import Container from './styles';

interface Props {
    name: string;
    job: string;
    photo: string;
    color: string;
    padding?: boolean;
}

const Header: React.FC<Props> = ({ name, job, photo, color, padding = false }) => (
    <Container>
        <Photo photo={photo} color={color} />
        <Info name={name} job={job} padding={padding} />
    </Container>
);

export default Header;
