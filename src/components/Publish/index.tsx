import React from 'react';
import Promoted from './Promoted';
import Footer from './Footer';

import Container from './styles';

interface Props {
  banner?: boolean;
}

const Publish: React.FC<Props> = ({ banner = false }) => (
  <Container>
    <Promoted banner={banner} />
    <Footer />
  </Container>
);

export default Publish;
