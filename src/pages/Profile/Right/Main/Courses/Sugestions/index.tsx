import React from 'react';

import { Container, List } from './styles';
import Item from './Item';

const Courses: React.FC = () => (
  <Container>
    <List>
      <Item
        image="https://media-exp1.licdn.com/dms/image/C4E0DAQEEsfVvaXcIcw/learning-public-crop_60_100/0?e=1594083600&v=beta&t=FTWgqOJBvENZ7SQHEGIBIwzGcuxol84NOwa9C5rjRQM"
        name="Como Desenvolver a Resiliência"
        views="6.482 visualizaram"
      />
      <Item
        image="https://media-exp1.licdn.com/dms/image/C4E0DAQG8_PjJGyWvfA/learning-public-crop_60_100/0?e=1593792000&v=beta&t=WUPXJq4xz5YtEKXqlRFY6XRR-yqCL6TMd1LNYTt_Ywc"
        name="Fundamentos do Scrum"
        views="30.830 visualizaram"
      />
      <Item
        image="https://media-exp1.licdn.com/dms/image/C4E0DAQFe_NAEdJGwJg/learning-public-crop_60_100/0?e=1594065600&v=beta&t=yatsCczWA72O56BN6isXtDBk9LFyMlamwnqtMph2V1Q"
        name="Liderança com Inteligência Emocional"
        views="12.563 visualizaram"
      />
    </List>
  </Container>
);

export default Courses;
