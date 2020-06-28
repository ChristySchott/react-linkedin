import React from 'react';

import Container from './styles';
import Post from './Post';
import Feed from './Feed';

const Main: React.FC = () => (
    <Container>
        <Post />
        <Feed />
    </Container>
);

export default Main;
