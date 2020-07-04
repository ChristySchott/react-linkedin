/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';

import { Link } from 'react-router-dom';

import { AiFillCaretDown } from 'react-icons/ai';

import {
    Container, Icon, Text, Notification,
} from './styles';

interface Props {
    icon?: any;
    text: string;
    drop?: boolean;
    onClick?: any;
    path?: string;
    notification?: boolean,
}

const Item: React.FC<Props> = ({
    icon, text, drop, onClick, path = '', notification = false,
}) => (
        <Container>
            <Link to={path} onClick={onClick}>
                <Icon>{icon}</Icon>
                {notification && <Notification>1</Notification>}
                <Text>
                    <span>{text}</span>
                    {drop ? <AiFillCaretDown size={16} /> : ''}
                </Text>
            </Link>
        </Container>
    );

export default Item;
