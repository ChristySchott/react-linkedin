import React from 'react';

import { ReactComponent as More } from 'assets/main/more.svg';
import { ReactComponent as World } from 'assets/main/world.svg';
import {
  Container, BoxImage, Image, Connection, Text, Name, Job, Date,
} from './styles';

interface Props {
    name: string;
    job: string;
    date: string;
    image: string;
    active?: boolean;
}

const Author: React.FC<Props> = ({
  image, name, job, date, active = false,
}) => (
  <Container>
    <BoxImage>
      <Image><img src={image} alt="" /></Image>
      {active && <Connection />}
    </BoxImage>
    <Text>
      <Name>
        <div>
          <strong>{name}</strong>
          <span> • 1º</span>
        </div>
        <More />
      </Name>
      <Job>{job}</Job>
      <Date>
        {date}
        <span> • </span>
        <World />
      </Date>
    </Text>
  </Container>
);

export default Author;
