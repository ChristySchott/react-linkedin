import React from 'react';

import Container from './styles';
import Item from './Item';

const Institutions: React.FC = () => (
  <Container>
    <Item
      image="https://media-exp1.licdn.com/dms/image/C510BAQFHYedTI-oyWA/company-logo_100_100/0?e=1602115200&v=beta&t=tOHjRFh1jfkHqsGMrFA0BgUtnVyMl97FjHrsx41mxxc"
      name="Rocketseat"
      followers="28.945 seguidores"
    />
    <Item
      image="https://media-exp1.licdn.com/dms/image/C4E0BAQH9V1274sm9GA/company-logo_100_100/0?e=1602115200&v=beta&t=hJqcaMOOgHJZ3Z-HICbURfINszZtN_W8bdBmzYCDr30"
      name="Instituto de Gestão e Tecnologia da Informação"
      followers="132.408 seguidores"
    />
    <Item
      image="https://media-exp1.licdn.com/dms/image/C4E0BAQGLKj3JHcof0w/company-logo_100_100/0?e=1602115200&v=beta&t=YrmjGXI4Cr4WcyxIWYcAeMMTGMGnGKHr57DHucNilHk"
      name="freeCodeCamp"
      followers="334.795 seguidores"
    />
  </Container>
);

export default Institutions;
