import React from 'react';
import Wrapper from 'components/Wrapper';

import {
  Container, Content, Header, Image, Text, Title, Sub, Main, Item, Input, Label,
} from './styles';

const Intent: React.FC = () => (
  <Container>
    <Wrapper>
      <Content>
        <Header>
          <Image><img src="https://media-exp1.licdn.com/dms/image/C4E03AQGArBZoTlAL5Q/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=8TgATuNtdQS00Pg0e5Ci1l7QOrwLHp1y0UlaOYPlq5I" alt="" /></Image>
        </Header>

        <Main>
          <Text>
            <Title>Christy, como uma conta Premium pode lhe ajudar?</Title>
            <Sub>Recomendaremos o plano certo para você</Sub>
          </Text>
          <Item>
            <Input type="radio" />
            {' '}
            <Label>Procurar emprego e ser contratado</Label>
          </Item>
          <Item>
            <Input type="radio" />
            {' '}
            <Label>Ampliar minha rede e controlar minha reputação</Label>
          </Item>
          <Item>
            <Input type="radio" />
            {' '}
            <Label>Encontrar leads com mais eficiência</Label>
          </Item>
          <Item>
            <Input type="radio" />
            {' '}
            <Label>Encontrar e contratar talentos com rapidez</Label>
          </Item>
          <Item>
            <Input type="radio" />
            {' '}
            <Label>Desenvolver minhas competências profissionais</Label>
          </Item>
        </Main>
      </Content>
    </Wrapper>
  </Container>
);

export default Intent;
