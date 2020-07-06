import React, { useEffect } from 'react';
import Ad from 'components/Ad';
import Publish from 'components/Publish';

import Sticky from 'react-stickynode';

import Footer from 'pages/Profile/Footer';
import {
  Container, Content, Core, Header, Main, Right,
} from './styles';
import Menu from './Menu';
import Results from './Results';

const Connections: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <Container>
      <Header>
        <Menu />
      </Header>
      <Content>
        <Ad />
        <Core>
          <Main>
            <Results />
          </Main>
          <Sticky top={60}>
            <Right>
              <Publish banner footer={false} />
            </Right>
          </Sticky>
        </Core>
      </Content>
      <Footer />
    </Container>
  );
};

export default Connections;
