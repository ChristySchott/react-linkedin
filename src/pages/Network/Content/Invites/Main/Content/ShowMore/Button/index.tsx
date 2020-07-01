import React, { useState } from 'react';

import { Box, Container, Text } from './styles';

const Button: React.FC = () => {
    const [show, setShow] = useState(false);
    return (
        <Box>
            <Container onClick={() => setShow(!show)}>
                <Text>{show ? 'Exibir menos' : 'Exibir mais'}</Text>
            </Container>
        </Box>
    );
};

export default Button;
