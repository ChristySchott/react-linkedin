import React, { ReactNode } from 'react';

import { Container, Search, Icon } from './styles';

interface Props {
    text: string;
    name: string;
    icon: ReactNode;
}

const Input: React.FC<Props> = ({ text, name, icon }) => (
    <Container>
        <Search name={name} placeholder={text} />
        <Icon>{icon}</Icon>
    </Container>
);

export default Input;
