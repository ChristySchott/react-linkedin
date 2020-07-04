import React, { useState } from 'react';

import { ReactComponent as Like } from 'assets/main/like.svg';
import { ReactComponent as Comment } from 'assets/main/comment.svg';
import { ReactComponent as Share } from 'assets/main/share.svg';

import Container from './styles';
import Item from './Item';
import Reactions from './Reactions';

const Interact: React.FC = () => {
    const [show, setShow] = useState(false);
    return (
        <Container onClickCapture={() => setShow(false)}>
            <div
                onMouseOver={() => setShow(true)}
                onFocus={() => setShow(true)}
            >
                <Item text="Gostei"><Like /></Item>
            </div>
            <Item text="Comentar"><Comment /></Item>
            <Item text="Compartilhar"><Share /></Item>
            {show && <Reactions />}
        </Container>
    );
};

export default Interact;
