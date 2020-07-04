import React from 'react';

import { ReactComponent as Message } from 'assets/profile/message.svg'

import { Container, Image, Infos, Border, Name, Job, Icon } from './styles';

interface Props {
    image: string;
    name: string;
    job: string;
}

const Item: React.FC<Props> = ({ image, name, job }) => {
    return <Container>
        <Image>
            <img src={image} alt="" />
        </Image>
        <Border>
            <Infos>
                <Name>{name} <span>&middot; 1º</span></Name>
                <Job>{job}</Job>
            </Infos>
            <Icon>
                <Message />
            </Icon>
        </Border>
    </Container>;
}

export default Item;