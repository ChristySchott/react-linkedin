import React from 'react';

import {
  Container, Image, Infos, Name, Followers,
} from './styles';

interface Props {
  image: string;
  name: string;
  followers: string;
}

const Item: React.FC<Props> = ({ image, name, followers }) => (
  <Container>
    <Image>
      <img src={image} alt="" />
    </Image>
    <Infos>
      <Name>{name}</Name>
      <Followers>{followers}</Followers>
    </Infos>
  </Container>
);

export default Item;
