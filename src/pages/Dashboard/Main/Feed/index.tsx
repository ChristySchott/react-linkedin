import React from 'react';

import mac from 'assets/main/mac.jpg';
import Category from './Category';

import Container from './styles';
import Post from './Post';

const Feed: React.FC = () => (
  <Container>
    <Category />
    <Post
      name="Ada Lovelace"
      job="Front-end Developer | Software Engineer | Web Developer"
      date="8 h"
      userPhoto="https://media-exp1.licdn.com/dms/image/C4D03AQEN5X8YNL1cgg/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=daogqnCfsMPuhAXKan4F5ibqYXFsXBCgzFq9pyYIlgI"
      active
      image={mac}
      alt="Two person using MacBooks"
    />
    <Post
      name="Alan Turing"
      job="Consultor de Recrutamento e Seleção | Carreira | Diversidade"
      date="1 d"
      userPhoto="https://media-exp1.licdn.com/dms/image/C4D35AQEN1RP8MJ_Kvg/profile-framedphoto-shrink_100_100/0?e=1593910800&v=beta&t=paUGy6pFgyUkm_hj0jiHA8VhaNivFUZXjKBPeg94agM"
      image="https://media-exp1.licdn.com/dms/image/C4D22AQGVg8TBqLYacg/feedshare-shrink_800/0?e=1596672000&v=beta&t=0-jDoNEXLeR8L3wXqQsMw9_K9dBokVV4zsVEdmamw80"
      alt="Two person using MacBooks"
    />
    <Post
      name="Hermione Granger"
      job="Software Developer at Any | Computer Engineer"
      date="1 d"
      userPhoto="https://media-exp1.licdn.com/dms/image/C4D35AQHRQim6s6Jzlg/profile-framedphoto-shrink_100_100/0?e=1593910800&v=beta&t=VLpUL1c-MXS4cKV6vkFD1Z99w8dB53am9xVtkp1Btvw"
      active
      image="https://media-exp1.licdn.com/dms/image/C4E22AQGPazrXa7eGiw/feedshare-shrink_800/0?e=1596672000&v=beta&t=lJmaZjiu5TZLxtmP3veUQWheS6T0-ASwH9LN-VUhuYE"
      alt="Two person using MacBooks"
    />
  </Container>
);

export default Feed;
