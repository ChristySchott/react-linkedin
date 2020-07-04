import React, { ReactNode } from 'react';

import { ReactComponent as Play } from 'assets/profile/play.svg'

import { Container, Image, Infos, Name, Followers } from './styles';

interface Props {
    image: string;
    name: string;
    followers: string;
}

const Item: React.FC<Props> = ({ image, name, followers }) => {
    return (
        <Container>
            <Image>
                <img src={image} alt="" />
            </Image>
            <Infos>
                <Name>{name}</Name>
                <Followers>{followers}</Followers>
            </Infos>
        </Container>
    )
}

export default Item;