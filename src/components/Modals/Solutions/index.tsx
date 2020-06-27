import React, { ReactNode } from 'react';

import Container from './styles';
import Close from './Close';
import Main from './Main';

interface Props {
    toggleModal: ReactNode;
}

const Solutions: React.FC<Props> = ({ toggleModal }) => (
    <Container>
        <Close toggleModal={toggleModal} />
        <Main />
    </Container>
);

export default Solutions;
