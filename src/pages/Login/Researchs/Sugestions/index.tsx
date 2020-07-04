import React from 'react';
import { ReactComponent as Icon } from 'assets/login/more.svg';
import Item from './Item';

import {
  Container, Title, Text, Items, More, TextMore, IconMore,
} from './styles';

const Sugestions: React.FC = () => (
  <Container>
    <Title>
      <Text>Pesquisas sugeridas</Text>
    </Title>

    <Items>
      <Item name="Engenharia" />
      <Item name="Desenvolvimento de negócios" />
      <Item name="Financeiro" />
      <Item name="Auxiliar Administrativo" />
      <Item name="Representante de vendas no varejo" />
      <Item name="Atendimento ao cliente" />
      <Item name="Operações" />
    </Items>

    <More>
      <TextMore>Exibir mais</TextMore>
      <IconMore><Icon /></IconMore>
    </More>
  </Container>
);

export default Sugestions;
