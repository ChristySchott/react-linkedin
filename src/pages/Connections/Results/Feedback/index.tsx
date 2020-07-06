import React from 'react';

import { ReactComponent as Positive } from 'assets/profile/positive.svg';
import { ReactComponent as Negative } from 'assets/profile/negative.svg';

import {
  Container, Content, Text, Title, Sub, Icons, Button,
} from './styles';

const Feedback: React.FC = () => (
  <Container>
    <Content>
      <Text>
        <Title>Esses resultados são úteis?</Title>
        <Sub>Seu feedback nos ajuda a melhorar.</Sub>
      </Text>
      <Icons>
        <Button><Positive /></Button>
        <Button><Negative /></Button>
      </Icons>
    </Content>
  </Container>
);

export default Feedback;
