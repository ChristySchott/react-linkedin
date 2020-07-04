import React from 'react';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Nav from './Nav';

import {
  Menu, Title, Icon, Buttons, Alert, Margin,
} from './styles';
import Item from '../../Connections/Item';

function Carousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={180}
      naturalSlideHeight={282}
      totalSlides={8}
      visibleSlides={4.1}
    >
      <Menu>
        <Title>
          <Icon>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF9z7ZChrcJfw/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=vWAUzMJZc6osJ8mhSHSLKeV9BJZqQlMriuL8TkPrDuI" alt="" />
          </Icon>
          Conexões de Ada que talvez você conheça
        </Title>
        <Buttons>
          <Alert><span>Fechar</span></Alert>
          <ButtonBack><Nav back /></ButtonBack>
          <ButtonNext><Nav /></ButtonNext>
        </Buttons>
      </Menu>

      <Margin>
        <Slider>
          <Slide index={0}>
            <Item padding color="#ff4d4d" photo="https://media-exp1.licdn.com/dms/image/C4D03AQE_Sxpe-UtsFg/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=-6FkuB3WMz4Ma4bHkgtDJ9uVCU-QWxOCjBzsHxEu7AU" name="Paulo Bruno Serafim" job=" Software Developer at Atlantico" number="33" />
            {' '}
          </Slide>
          <Slide index={1}><Item padding color="#9999ff" photo="https://media-exp1.licdn.com/dms/image/C4D03AQEBqituHHQtDw/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=xMcYdoJGnnZr-VNXq-Lp6MG9N6TjGE_PPTjUbJvkPIM" name="Elenice Miranda" job=" Java Developer" number="27" /></Slide>
          <Slide index={2}><Item padding color="#ffb84d" photo="https://media-exp1.licdn.com/dms/image/C4D03AQFScoVGqZa0VA/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=DJFdF7g_T2vidm7g4dUcF6kNyVfpgVjiB0eXyjlo26E" name="Rodrigo Galba" job=" AWS Specialist 4x certified" number="74" /></Slide>
          <Slide index={4}><Item padding color="#ff4d4d" photo="https://media-exp1.licdn.com/dms/image/C4D03AQFCzfGksJebXg/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=g38vYGLFFQq2nT6aV17dewpN_pFWBlkCxNKB3VvEsU0" name="Artur Schaefer" job=" Android Developer" number="12" /></Slide>
          <Slide index={3}><Item padding color="#b3c6ff" photo="https://media-exp1.licdn.com/dms/image/C4E03AQGdXnE0wYNO2A/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=PTd_4uiFQBXE6jsY1nPv-pJqPt5cdlKy08kmSuLhV3I" name="Thais R." job=" Frontend Software Engineer" number="105" /></Slide>
          <Slide index={5}>
            <Item padding color="#adad85" photo="https://media-exp1.licdn.com/dms/image/C4D03AQEs2MnAVWFb7w/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=rCpbhHRvRoERPK1gzvAJm4YhvSB7GNpzMyN5NK5awyo" name="Paulo Bruno Serafim" job=" Software Developer at Atlantico" number="33" />
            {' '}
          </Slide>
          <Slide index={7}><Item padding color="#9999ff" photo="https://media-exp1.licdn.com/dms/image/C5103AQERxzmtDml5vQ/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=c85b8qV5O74vYc68pjK65LbXjpJxnFjB3CT8YI1H-Cg" name="Rodrigo Galba" job=" AWS Specialist 4x certified" number="74" /></Slide>
          <Slide index={6}><Item padding color="#ff8080" photo="https://media-exp1.licdn.com/dms/image/C5603AQHS3OsvT4h_kg/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=voV_9ScXKGdVaNdfHsISliYBrGdPgCPKlDPlhnNC0oc" name="Elenice Miranda" job=" Java Developer" number="27" /></Slide>
        </Slider>
      </Margin>
    </CarouselProvider>
  );
}

export default Carousel;
