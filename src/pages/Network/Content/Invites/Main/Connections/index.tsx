import React from 'react';

import Wrapper from 'components/Wrapper';
import {
  Container, Title, Content, User,
} from './styles';
import Item from './Item';

const Connections: React.FC = () => (
  <Wrapper>
    <Container>
      <Title> Mais sugestões para você</Title>
      <Content>
        <User>
          <Item color="#ff4d4d" photo="https://media-exp1.licdn.com/dms/image/C4E03AQEU_lRw_6Ybxw/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=C-JJtiBGJC2dOn7UXzoN5Gnu6rOsSo-Fl0TqdgB-_uw" name="Paulo Bruno Serafim" job=" Software Developer at Atlantico" number="33" />
          {' '}
        </User>
        <User><Item color="#9999ff" photo="https://media-exp1.licdn.com/dms/image/C5603AQGQuEkWq0B6NQ/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=OInHHQpxGhwkzD2ouA0hbt5YN_QULwkdRYrAouSAQ4Q" name="Elenice Miranda" job=" Java Developer" number="27" /></User>
        <User><Item color="#ffb84d" photo="https://media-exp1.licdn.com/dms/image/C4E03AQFZRwENz1WlSQ/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=hi_nW1IqOKBMdf8juYfKagAN1LdHTlbSHkOa7xbA3w8" name="Rodrigo Galba" job=" AWS Specialist 4x certified" number="74" /></User>
        <User><Item color="#ff4d4d" photo="https://media-exp1.licdn.com/dms/image/C4D03AQGfZ3X747hL5Q/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=qgTLu7GMTuhjDB7-du-20j4gIaCIqB1PMicF2W6xEhE" name="Artur Schaefer" job=" Android Developer" number="12" /></User>
        <User><Item color="#b3c6ff" photo="https://media-exp1.licdn.com/dms/image/C4D03AQF9dN-u13xj5A/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=KNWg_dYyXuRqd2R76W37YTdPDK2wiC4lXlfuDw55Sv8" name="Thais R." job=" Frontend Software Engineer" number="105" /></User>
        <User>
          <Item color="#adad85" photo="https://media-exp1.licdn.com/dms/image/C4E03AQFZRwENz1WlSQ/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=hi_nW1IqOKBMdf8juYfKagAN1LdHTlbSHkOa7xbA3w8" name="Paulo Bruno Serafim" job=" Software Developer at Atlantico" number="33" />
          {' '}
        </User>
        <User><Item color="#9999ff" photo="https://media-exp1.licdn.com/dms/image/C4E03AQGrnRjxneOg2Q/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=piuO4Fg-mQBCoy5w6FIFZUv7ZfADEatDIZJZ9aDP-gs" name="Rodrigo Galba" job=" AWS Specialist 4x certified" number="74" /></User>
        <User><Item color="#ff8080" photo="https://media-exp1.licdn.com/dms/image/C5603AQGQuEkWq0B6NQ/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=OInHHQpxGhwkzD2ouA0hbt5YN_QULwkdRYrAouSAQ4Q" name="Elenice Miranda" job=" Java Developer" number="27" /></User>
        <User>
          <Item color="#ff4d4d" photo="https://media-exp1.licdn.com/dms/image/C4E03AQFZRwENz1WlSQ/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=hi_nW1IqOKBMdf8juYfKagAN1LdHTlbSHkOa7xbA3w8" name="Paulo Bruno Serafim" job=" Software Developer at Atlantico" number="33" />
          {' '}
        </User>
        <User><Item color="#9999ff" photo="https://media-exp1.licdn.com/dms/image/C5603AQGQuEkWq0B6NQ/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=OInHHQpxGhwkzD2ouA0hbt5YN_QULwkdRYrAouSAQ4Q" name="Elenice Miranda" job=" Java Developer" number="27" /></User>
        <User><Item color="#ffb84d" photo="https://media-exp1.licdn.com/dms/image/C4E03AQGrnRjxneOg2Q/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=piuO4Fg-mQBCoy5w6FIFZUv7ZfADEatDIZJZ9aDP-gs" name="Rodrigo Galba" job=" AWS Specialist 4x certified" number="74" /></User>
        <User><Item color="#ff4d4d" photo="https://media-exp1.licdn.com/dms/image/C4D03AQGfZ3X747hL5Q/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=qgTLu7GMTuhjDB7-du-20j4gIaCIqB1PMicF2W6xEhE" name="Artur Schaefer" job=" Android Developer" number="12" /></User>
        <User><Item color="#b3c6ff" photo="https://media-exp1.licdn.com/dms/image/C4D03AQF9dN-u13xj5A/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=KNWg_dYyXuRqd2R76W37YTdPDK2wiC4lXlfuDw55Sv8" name="Thais R." job=" Frontend Software Engineer" number="105" /></User>
        <User>
          <Item color="#adad85" photo="https://media-exp1.licdn.com/dms/image/C4E03AQFZRwENz1WlSQ/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=hi_nW1IqOKBMdf8juYfKagAN1LdHTlbSHkOa7xbA3w8" name="Paulo Bruno Serafim" job=" Software Developer at Atlantico" number="33" />
          {' '}
        </User>
        <User><Item color="#9999ff" photo="https://media-exp1.licdn.com/dms/image/C4E03AQGrnRjxneOg2Q/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=piuO4Fg-mQBCoy5w6FIFZUv7ZfADEatDIZJZ9aDP-gs" name="Rodrigo Galba" job=" AWS Specialist 4x certified" number="74" /></User>
        <User><Item color="#ff8080" photo="https://media-exp1.licdn.com/dms/image/C5603AQGQuEkWq0B6NQ/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=OInHHQpxGhwkzD2ouA0hbt5YN_QULwkdRYrAouSAQ4Q" name="Elenice Miranda" job=" Java Developer" number="27" /></User>
      </Content>
    </Container>
  </Wrapper>
);

export default Connections;
