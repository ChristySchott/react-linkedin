import React from 'react';
import Wrapper from 'components/Wrapper';
import Invites from './Invites';

import { Container } from './styles';

const Content: React.FC = () => {
    return <Wrapper>
        <Container>
            <Invites />
        </Container>
    </Wrapper>;
}

export default Content;