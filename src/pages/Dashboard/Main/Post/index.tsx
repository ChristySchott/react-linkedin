import React from 'react';
import Wrapper from 'components/Wrapper';
import Actions from './Actions';
import Article from './Article';

// import { Container } from './styles';

const Post: React.FC = () => (
    <Wrapper>
        <Actions />
        <Article />
    </Wrapper>
);

export default Post;
