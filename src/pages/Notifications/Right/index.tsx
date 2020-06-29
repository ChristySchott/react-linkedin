import React from 'react';
import Sticky from 'react-stickynode';
import Publish from 'components/Publish';

import Container from './styles';

const Right: React.FC = () => (
    <Container>
        <Sticky top={60}>
            <Publish />
        </Sticky>
    </Container>
);

export default Right;
