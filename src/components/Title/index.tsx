import React, { ReactNode, useState } from 'react';

import { Container, Text, Icon } from './styles';

interface Props {
    title: string;
    icon?: ReactNode,
    small?: boolean
    gray?: boolean
}

const Title: React.FC<Props> = ({
    title, icon, small = false, gray = false,
}) => {
    const [show, setShow] = useState(false);

    return (
        <Container onClick={() => setShow(!show)} transform={show}>
            <Text small={small} gray={gray}>{title}</Text>
            <Icon>{icon}</Icon>
        </Container>
    );
};

export default Title;
