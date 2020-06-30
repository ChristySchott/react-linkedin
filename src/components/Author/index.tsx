import React, { ReactNode } from 'react';

import { BoxImage, Image, Connection } from './styles';

interface Props {
    image: ReactNode;
    big?: boolean;
}

const Author: React.FC<Props> = ({ image, big = false }) => (
    <BoxImage big={big}>
        <Image>{image}</Image>
        <Connection />
    </BoxImage>
);

export default Author;
