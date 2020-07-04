/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

import { ReactComponent as More } from 'assets/messages/more.svg';

import { ReactComponent as Image } from 'assets/messages/image.svg';
import { ReactComponent as Clip } from 'assets/messages/clip.svg';
import { ReactComponent as Gif } from 'assets/messages/gif.svg';
import { ReactComponent as Emoji } from 'assets/messages/emoji.svg';

import {
    Container, Content, Icons, Icon, BoxCta, Button, Svg, Emojis,
} from './styles';

const Actions: React.FC = () => {
    const [show, setShow] = useState(false);

    return (
        <Container>
            <Content>
                <Icons>
                    <Icon><button type="button"><Image /></button></Icon>
                    <Icon><button type="button"><Clip /></button></Icon>
                    <Icon><button type="button"><Gif /></button></Icon>
                    <Icon><button type="button" onClick={() => setShow(!show)}><Emoji /></button></Icon>
                    {show && <Emojis><Picker onEmojiClick={() => setShow(false)} /></Emojis>}
                </Icons>
                <BoxCta>
                    <Button>Enviar</Button>
                    <Svg><More /></Svg>
                </BoxCta>
            </Content>
        </Container>
    );
};

export default Actions;
