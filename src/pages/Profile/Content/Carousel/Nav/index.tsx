import React from 'react';

import { ReactComponent as Back } from 'assets/jobs/back.svg';
import { ReactComponent as Next } from 'assets/jobs/next.svg';

import Container from './styles';

interface Props {
    back?: boolean;
}

const Nav: React.FC<Props> = ({ back = false }) => (
    <Container>
        {back ? <Back /> : <Next />}
    </Container>
);

export default Nav;
