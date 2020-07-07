import React, { useState } from 'react';
import Intent from './Intent';

import { Container, Content, Button } from './styles';
import Cards from './Cards';

const Main: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Content>
        {show ? <Cards />
          : (
            <>
              <Intent />
              <Button onClick={() => setShow(true)}>
                Conheça todos os planos
              </Button>
            </>
          )}
      </Content>
    </Container>
  );
};

export default Main;
