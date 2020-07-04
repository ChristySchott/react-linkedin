import React from 'react';

import {
  Container, Image, Infos, Name, Comment,
} from './styles';

interface Props {
    image: string;
    name: string;
}

const Item: React.FC<Props> = ({ image, name }) => (
  <Container>
    <Image>
      <img src={image} alt="" />
    </Image>
    <Infos>
      <Name>{name}</Name>
      <Comment>Christy comentou</Comment>
    </Infos>
  </Container>
);

export default Item;
