import React from 'react';

import { ReactComponent as Post } from 'assets/main/post.svg';
import { ReactComponent as Image } from 'assets/main/image.svg';
import { ReactComponent as Video } from 'assets/main/video.svg';
import { ReactComponent as Doc } from 'assets/main/doc.svg';
import {
    Container, Items, NewPost, Text,
} from './styles';

import Action from './Action';

const Actions: React.FC = () => (
    <Container>
        <Items>
            <Action>
                <NewPost>
                    <Post />
                    <Text>Começar uma publicação</Text>
                </NewPost>
            </Action>
            <Action><Image /></Action>
            <Action><Video /></Action>
            <Action><Doc /></Action>
        </Items>
    </Container>
);

export default Actions;
