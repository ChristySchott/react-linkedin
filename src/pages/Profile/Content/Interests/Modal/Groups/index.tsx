import React from 'react';

import Container from './styles';
import Item from './Item';

const Groups: React.FC = () => (
  <Container>
    <Item
      image="https://media-exp1.licdn.com/dms/image/C4D07AQHezT0aNFVn_g/group-logo_image-shrink_200x200/0?e=1593997200&v=beta&t=wE63R4jtqwGqexRjdD9epF1sGLmm4REdA_qI6CSTQjE"
      name="JavaScript"
      followers="148.795 usuários"
    />
    <Item
      image="https://media-exp1.licdn.com/dms/image/C4D07AQFL4QdxrtkgKw/group-logo_image-shrink_200x200/0?e=1593997200&v=beta&t=cqndkGPXarXixDYUnAphdxpMEycQ2iYgq8SL895RuEc"
      name="HTML5 / CSS3 / Javascript (HTML/CSS/JS)"
      followers="73.408 usuários"
    />
    <Item
      image="https://media-exp1.licdn.com/dms/image/C5607AQFRvVKNI2fUew/group-logo_image-shrink_200x200/0?e=1593997200&v=beta&t=uPSkTAp7Yt1s2Xh0ywEJpm9Cw_UbobxVS_Qv-ECkkhE"
      name="Front End Developer Group"
      followers="72.042 usuários"
    />
  </Container>
);

export default Groups;
