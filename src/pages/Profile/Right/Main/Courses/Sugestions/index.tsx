import React from 'react';

import { Container, List } from './styles';
import Item from './Item';

const Courses: React.FC = () => (
  <Container>
    <List>
      <Item
        image="https://media-exp1.licdn.com/dms/image/C4E0DAQGEpRomFZKbWg/learning-public-crop_60_100/0?e=1594220400&v=beta&t=FREEWgO1edNV9qd0qHNaXvwtoeYTRkJbakRRRGqmOtk"
        name="Como Desenvolver a Resiliência"
        views="6.482 visualizaram"
      />
      <Item
        image="https://media-exp1.licdn.com/dms/image/C4E0DAQF09rc0z66HVg/learning-public-crop_60_100/0?e=1594220400&v=beta&t=DMtf_FFuP16FbWG28Ss4fJvm6fmFL2pwmcsehYT2jso"
        name="Fundamentos do Scrum"
        views="30.830 visualizaram"
      />
      <Item
        image="https://media-exp1.licdn.com/dms/image/C4E0DAQFe_NAEdJGwJg/learning-public-crop_60_100/0?e=1594220400&v=beta&t=27VEnHuj3m51sXBLrl562xyB3SVv8yEY2ORS3mmfC10"
        name="Liderança com Inteligência Emocional"
        views="12.563 visualizaram"
      />
    </List>
  </Container>
);

export default Courses;
