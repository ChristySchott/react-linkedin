import React from 'react';

import { ReactComponent as Check } from 'assets/profile/check.svg';

import {
  Container, Left, Image, Infos, Name, Followers, Following, Icon, Text,
} from './styles';

interface Props {
  image: string;
  name: string;
  followers: string;
}

const Item: React.FC<Props> = ({ image, name, followers }) => (
  <Container>
    <Left>
      <Image>
        <img src={image} alt="" />
      </Image>
      <Infos>
        <Name>{name}</Name>
        <Followers>{followers}</Followers>
      </Infos>
    </Left>
    <Following>
      <Icon><Check /></Icon>
      <Text>Seguindo</Text>
    </Following>
  </Container>
);

export default Item;
