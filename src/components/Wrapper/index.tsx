import React from 'react';

import Container from './styles';

interface Props {
    margin?: boolean;
    top?: boolean;
    painel?: boolean;
    shadow?: boolean;
}

const Wrapper: React.FC<Props> = ({
    children, margin = false, top = false, painel = false, shadow = false
}) => (
        <Container margin={margin} top={top} painel={painel} shadow={shadow}>
            {children}
        </Container>
    );

export default Wrapper;
