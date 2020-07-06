import React from 'react';

import { ReactComponent as BackIcon } from 'assets/profile/back.svg';
import { ReactComponent as NextIcon } from 'assets/profile/next.svg';

import {
  Container, Content, Back, Icon, Text, Pages, Page, Number, Next,
} from './styles';

const Menu: React.FC = () => (
  <Container>
    <Content>
      <Back disabled>
        <Icon><BackIcon /></Icon>
        <Text>Voltar</Text>
      </Back>

      <Pages>
        <Page><Number>1</Number></Page>
        <Page><Number>2</Number></Page>
        <Page><Number>3</Number></Page>
        <Page><Number>4</Number></Page>
        <Page><Number>5</Number></Page>
        <Page><Number>6</Number></Page>
        <Page><Number>7</Number></Page>
        <Page><Number>8</Number></Page>
        <Page><Number>...</Number></Page>
        <Page><Number>100</Number></Page>
      </Pages>

      <Next>
        <Text>Avançar</Text>
        <Icon><NextIcon /></Icon>
      </Next>
    </Content>
  </Container>
);

export default Menu;
