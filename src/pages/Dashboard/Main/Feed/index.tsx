import React from 'react';

import { ReactComponent as UserOne } from 'assets/main/one.svg';
import { ReactComponent as UserTwo } from 'assets/main/two.svg';
import { ReactComponent as UserThree } from 'assets/main/three.svg';

import mac from 'assets/main/mac.jpg';
import Category from './Category';

import Container from './styles';
import Post from './Post';

const Feed: React.FC = () => (
    <Container>
        <Category />
        <Post
            name="Elisabeth Lovelace"
            job="Front-end Developer | Software Engineer | Web Developer"
            date="8 h"
            userPhoto={<UserOne />}
            active
            image={mac}
            alt="Two person using MacBooks"
        />
        <Post
            name="Alan Turing"
            job="Consultor de Recrutamento e Seleção | Carreira | Diversidade"
            date="1 d"
            userPhoto={<UserTwo />}
            image={mac}
            alt="Two person using MacBooks"
        />
        <Post
            name="Elisabeth Lovelace"
            job="Software Developer at Any | Computer Engineer"
            date="1 d"
            userPhoto={<UserThree />}
            active
            image={mac}
            alt="Two person using MacBooks"
        />
    </Container>
);

export default Feed;
