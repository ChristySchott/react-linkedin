import React from 'react';

import Container from './styles';

interface Props {
    margin?: boolean;
    top?: boolean;
}

const Wrapper: React.FC<Props> = ({
    children, margin = false, top = false
}) => (
        <Container margin={margin} top={top}>
            {children}
        </Container>
    );

export default Wrapper;
