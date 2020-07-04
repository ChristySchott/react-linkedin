import React from 'react';
import Sticky from 'react-stickynode';

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
        <Sticky top={60}>
          <MyNetwork />
        </Sticky>
      </Aside>
      <Main>
        <Content />
      </Main>
    </Container>
  </WrapperAd>
);

export default Network;
