/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { ReactNode } from 'react';

import { AiFillCaretDown } from 'react-icons/ai';

import {
    Container, Content, Icon, Text,
} from './styles';

interface Props {
    icon: ReactNode;
    text: string;
    drop?: boolean;
    onClick?: any;
}

const Item: React.FC<Props> = ({
    icon, text, drop, onClick,
}) => (
        <Container>
            <Content onClick={onClick}>
                <Icon>{icon}</Icon>
                <Text>
                    {text}
                    {drop ? <AiFillCaretDown size={16} /> : ''}
                </Text>
            </Content>
        </Container>
    );

export default Item;
