import React from 'react';

import { ReactComponent as Connection } from 'assets/network/connection.svg';

import { Container, Common, Icon, Text, Button } from './styles';

interface Props {
    number?: string;
}

const Footer: React.FC<Props> = ({ number }) => {
    return <Container>
        <Common>
            <Icon><Connection /></Icon>
            <Text>{number} conexões em comum</Text>
        </Common>
        <Button>Conectar</Button>
    </Container>;
}

export default Footer;