import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import {
    Container, Text, CTA, Button,
} from './styles';

interface Props {
    title?: string;
    info?: string | ReactNode;
    action: string;
}

const Template: React.FC<Props> = ({ title, info, action }) => (
    <Container>
        <Text>
            <span>{title}</span>
            <Link to="/">{info}</Link>
        </Text>
        <CTA>
            <Button>{action}</Button>
        </CTA>
    </Container>
);

export default Template;
