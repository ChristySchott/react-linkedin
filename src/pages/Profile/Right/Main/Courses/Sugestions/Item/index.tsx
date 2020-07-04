import React from 'react';

import { ReactComponent as Play } from 'assets/profile/play.svg';

import {
  Container, Image, Circle, Infos, Name, Job,
} from './styles';

interface Props {
    image: string;
    name: string;
    views: string;
}

const Item: React.FC<Props> = ({ image, name, views }) => (
  <Container>
    <Image>
      <img src={image} alt="" />
      <Circle>
        <Play />
      </Circle>
    </Image>
    <Infos>
      <Name>{name}</Name>
      <Job>{views}</Job>
    </Infos>
  </Container>
);

export default Item;
