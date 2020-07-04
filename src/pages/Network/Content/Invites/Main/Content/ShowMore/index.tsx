import React, { useState } from 'react';

import Collapsible from 'react-collapsible';
import Button from './Button';

import { Container, Box } from './styles';
import Invite from '../Invite';

function ShowMore() {
  const [reverse, setReverse] = useState(false);
  return (
    <Container reverse={reverse}>
      <Collapsible
        trigger={<Button />}
        onOpening={() => setReverse(true)}
        onClosing={() => setReverse(false)}
      >
        <Box>
          <Invite
            image="https://media-exp1.licdn.com/dms/image/C4D03AQFG1ylSrmqDOg/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=J9UppAy2Z4K_ttV5QQuqSU2sXUgLVd0wqLO_OGcxN6M"
            name="Hebiro Nadir Plihenar"
            job="Diretor Comercial"
          />
        </Box>
      </Collapsible>
    </Container>
  );
}

export default ShowMore;
