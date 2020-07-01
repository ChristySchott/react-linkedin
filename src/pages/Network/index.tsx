import React from 'react';

import Ad from 'components/Ad';
import {
  WrapperAd, Container, Main, Aside,
} from './styles';
import MyNetwork from './MyNetwork';
import Content from './Content';

const Network: React.FC = () => (
  <WrapperAd>
    <Ad />
    <Container>
      <Aside>
        <MyNetwork />
      </Aside>
      <Main>
        <Content />
      </Main>
    </Container>
  </WrapperAd>
);

export default Network;
