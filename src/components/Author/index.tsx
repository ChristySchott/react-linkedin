import React from 'react';

import { BoxImage, Image, Connection } from './styles';

interface Props {
    image: string;
    big?: boolean;
}

const Author: React.FC<Props> = ({ image, big = false }) => (
    <BoxImage big={big}>
        <Image><img src={image} alt="" /></Image>
        <Connection />
    </BoxImage>
);

export default Author;
