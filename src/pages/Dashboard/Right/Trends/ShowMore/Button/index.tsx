import React, { useState } from 'react';

import { ReactComponent as More } from 'assets/right/more.svg';
import { Container, Text, Icon } from './styles';

const Button: React.FC = () => {
    const [show, setShow] = useState(false);
    return (
        <Container onClick={() => setShow(!show)}>
            <Text>{show ? 'Exibir menos' : 'Exibir mais'}</Text>
            <Icon transform={show}><More /></Icon>
        </Container>
    );
};

export default Button;
