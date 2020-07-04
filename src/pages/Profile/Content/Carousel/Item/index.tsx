import React from 'react';
import Wrapper from 'components/Wrapper';

import { Container, Content, Image } from './styles';
import Header from './Header';
import Footer from './Footer';

interface Props {
    image: string;
}

const Item: React.FC<Props> = ({ image }) => (
  <Wrapper margin>
    <Container>
      <Content>
        <Header />
        <Image><img src={image} alt="" /></Image>
        <Footer />
      </Content>
    </Container>
  </Wrapper>
);

export default Item;
