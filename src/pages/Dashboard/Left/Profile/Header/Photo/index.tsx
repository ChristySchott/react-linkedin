import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Cover, User } from './styles';

const Photo: React.FC = () => (
  <Link to="/profile">
    <Container>
      <Cover />
      <User><img src="https://media-exp1.licdn.com/dms/image/C4E03AQGArBZoTlAL5Q/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=8TgATuNtdQS00Pg0e5Ci1l7QOrwLHp1y0UlaOYPlq5I" alt="" /></User>
    </Container>
  </Link>
);

export default Photo;
