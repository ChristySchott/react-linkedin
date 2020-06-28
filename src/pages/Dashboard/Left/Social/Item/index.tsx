import React from 'react';

import { ReactComponent as Group } from 'assets/left/group.svg';
import { ReactComponent as Hashtag } from 'assets/left/hashtag.svg';

import Container from './styles';

interface Props {
    hashtag?: boolean;
    text: string;
}

const Item: React.FC<Props> = ({ hashtag, text }) => (
    <Container>
        {hashtag ? <Hashtag /> : <Group />}
        <span>{text}</span>
    </Container>
);

export default Item;
