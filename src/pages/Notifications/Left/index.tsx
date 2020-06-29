import React from 'react';

import Sticky from 'react-stickynode';
import Container from './styles';
import Notification from './Notification';

const Left: React.FC = () => (
    <Sticky top={60}>
        <Container>
            <Notification />
        </Container>
    </Sticky>
);

export default Left;
