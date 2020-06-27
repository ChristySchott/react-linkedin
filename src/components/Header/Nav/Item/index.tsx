/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { ReactNode } from 'react';

import { Link } from 'react-router-dom';

import { AiFillCaretDown } from 'react-icons/ai';

import {
    Container, Icon, Text,
} from './styles';

interface Props {
    icon: ReactNode;
    text: string;
    drop?: boolean;
    onClick?: any;
    path?: string;
}

const Item: React.FC<Props> = ({
    icon, text, drop, onClick, path = '',
}) => (
        <Container>
            <Link to={path} onClick={onClick}>
                <Icon>{icon}</Icon>
                <Text>
                    {text}
                    {drop ? <AiFillCaretDown size={16} /> : ''}
                </Text>
            </Link>
        </Container>
    );

export default Item;
