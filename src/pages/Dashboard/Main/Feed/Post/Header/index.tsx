import React from 'react';

import Container from './styles';
import Author from './Author';
import Text from './Text';

interface Props {
    name: string;
    job: string;
    date: string;
    image: any;
    active?: boolean;
}

const Header: React.FC<Props> = ({
    name, job, date, image, active = false,
}) => (
        <Container>
            <Author
                name={name}
                job={job}
                date={date}
                image={image}
                active={active}
            />
            <Text />
        </Container>
    );

export default Header;
