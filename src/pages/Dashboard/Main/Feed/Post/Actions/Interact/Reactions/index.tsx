import React from 'react';

import { ReactComponent as Like } from 'assets/main/reactions/like.svg';
import { ReactComponent as Congratulations } from 'assets/main/reactions/congratulations.svg';
import { ReactComponent as Loved } from 'assets/main/reactions/loved.svg';
import { ReactComponent as Genious } from 'assets/main/reactions/genious.svg';
import { ReactComponent as Curious } from 'assets/main/reactions/curious.svg';

import { Container, List, Item } from './styles';

const Reactions: React.FC = () => (
    <Container>
        <List>
            <Item><Like /></Item>
            <Item><Congratulations /></Item>
            <Item><Loved /></Item>
            <Item><Genious /></Item>
            <Item><Curious /></Item>
        </List>
    </Container>
);

export default Reactions;
