import React, { ReactNode } from 'react';

import { BoxImage, Image, Connection } from './styles';

interface Props {
    image: ReactNode;
}

const Author: React.FC<Props> = ({ image }) => (
    <BoxImage>
        <Image>{image}</Image>
        <Connection />
    </BoxImage>
);

export default Author;
