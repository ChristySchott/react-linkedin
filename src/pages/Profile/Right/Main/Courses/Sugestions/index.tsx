import React from 'react';

import { Container, List } from './styles';
import Item from './Item';

const Courses: React.FC = () => (
  <Container>
    <List>
      <Item
        image="https://media-exp1.licdn.com/dms/image/C4E0DAQHA4w9auNKxsA/learning-public-crop_60_100/0?e=1593792000&v=beta&t=1u5i5Ug2ARqLXLh1oXO1saTIA4VsJ_PrdFPZSCtR-WI"
        name="HTML: Formação Básica"
        views="6.482 visualizaram"
      />
      <Item
        image="https://media-exp1.licdn.com/dms/image/C4E0DAQG8_PjJGyWvfA/learning-public-crop_60_100/0?e=1593792000&v=beta&t=WUPXJq4xz5YtEKXqlRFY6XRR-yqCL6TMd1LNYTt_Ywc"
        name="Fundamentos do Scrum"
        views="30.830 visualizaram"
      />
      <Item
        image="https://media-exp1.licdn.com/dms/image/C4E0DAQHA4w9auNKxsA/learning-public-crop_60_100/0?e=1593792000&v=beta&t=1u5i5Ug2ARqLXLh1oXO1saTIA4VsJ_PrdFPZSCtR-WI"
        name="Liderança com Inteligência Emocional"
        views="12.563 visualizaram"
      />
    </List>
  </Container>
);

export default Courses;
