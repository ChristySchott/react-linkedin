import React from 'react';

import { ReactComponent as Group } from 'assets/network/group.svg';
import { ReactComponent as Team } from 'assets/network/teamworks.svg';
import { ReactComponent as Contacts } from 'assets/network/contacts.svg';
import { ReactComponent as Follow } from 'assets/network/follow.svg';
import { ReactComponent as Pages } from 'assets/network/pages.svg';
import { ReactComponent as Newsletter } from 'assets/network/newsletter.svg';
import { ReactComponent as Hashtag } from 'assets/network/hashtag.svg';

import Wrapper from 'components/Wrapper';
import Publish from 'components/Publish';
import {
  Container, Content, Title, List, PublishContainer,
} from './styles';
import Item from './Item';

const MyNetwork: React.FC = () => (
  <Wrapper>
    <Container>
      <Content>
        <Title>Gerenciar minha rede</Title>
        <List>
          <Item icon={<Group />} text="Conexões" number="6.167" />
          <Item icon={<Team />} text="Colegas de equipe" />
          <Item icon={<Contacts />} text="Contatos" />
          <Item icon={<Follow />} text="Pessoas que eu sigo" number="3" />
          <Item icon={<Pages />} text="páginas" number="20" />
          <Item icon={<Newsletter />} text="Newsletters" />
          <Item icon={<Hashtag />} text="Hashtags" number="25" />
        </List>
      </Content>
      <PublishContainer>
        <Publish banner />
      </PublishContainer>
    </Container>
  </Wrapper>
);

export default MyNetwork;
