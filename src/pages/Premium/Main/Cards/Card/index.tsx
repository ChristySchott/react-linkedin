import React from 'react';

import {
  Container, Header, Title, Sub, Main, Item, Button,
} from './styles';

interface Props {
    color: string;
    title: string;
    sub: string;
    first: string;
    second: string;
    third: string;
}

const Card: React.FC<Props> = ({
  color, title, sub, first, second, third,
}) => (
  <Container>
    <Header color={color}>
      <Title>{title}</Title>
      <Sub>{sub}</Sub>
    </Header>

    <Main>
      <Item>{first}</Item>
      <Item>{second}</Item>
      <Item>{third}</Item>
    </Main>

    <Button>Selecionar plano</Button>
  </Container>
);

export default Card;
