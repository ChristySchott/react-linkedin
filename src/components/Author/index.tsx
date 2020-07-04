import React from 'react';

import { BoxImage, Image, Connection } from './styles';

interface Props {
    image: string;
    big?: boolean;
    small?: boolean;
}

const Author: React.FC<Props> = ({ image, big = false, small = false }) => (
    <BoxImage big={big} small={small}>
        <Image><img src={image} alt="" /></Image>
        <Connection />
    </BoxImage>
);

export default Author;
