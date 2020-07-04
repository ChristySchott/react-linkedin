import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Text } from './styles';

const Article: React.FC = () => (
    <Container>
        <Text>
            <Link to="/">Escreva um artigo</Link>
            no LinkedIn
        </Text>
    </Container>
);

export default Article;
