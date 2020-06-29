import React from 'react';

import {
    Container, BoxImage, Text, Title, Description,
} from './styles';

interface Props {
    title: string;
    resume: string;
    url: string;
}
const Item: React.FC<Props> = ({ url, title, resume }) => (
    <Container>
        <BoxImage>
            <img src={url} alt="" />
        </BoxImage>
        <Text>
            <Title>{title}</Title>
            <Description>{resume}</Description>
        </Text>
    </Container>
);

export default Item;
