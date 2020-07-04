import React from 'react';
import Promoted from './Promoted';
import Footer from './Footer';

import Container from './styles';

interface Props {
  banner?: boolean;
  footer?: boolean
}

const Publish: React.FC<Props> = ({ banner = false, footer = true }) => (
  <Container>
    <Promoted banner={banner} />
    {footer && <Footer />}
  </Container>
);

export default Publish;
