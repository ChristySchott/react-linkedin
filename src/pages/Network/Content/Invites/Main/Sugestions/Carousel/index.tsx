import React from 'react';
import {
    CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Nav from './Nav';

import { ReactComponent as User } from 'assets/main/two.svg';
import { ReactComponent as UserOne } from 'assets/main/one.svg';
import { ReactComponent as UserThree } from 'assets/main/three.svg';
import { ReactComponent as UserFour } from 'assets/main/four.svg';


import {
    Menu, Title, Icon, Buttons, Alert, Margin
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
                <Title><Icon><User /></Icon>Conexões de Ada que talvez você conheça</Title>
                <Buttons>
                    <Alert><span>Fechar</span></Alert>
                    <ButtonBack><Nav back /></ButtonBack>
                    <ButtonNext><Nav /></ButtonNext>
                </Buttons>
            </Menu>

            <Margin>
                <Slider>
                    <Slide index={0}><Item color="#ff4d4d" photo={<UserThree />} name="Paulo Bruno Serafim" job=" Software Developer at Atlantico" number="33" /> </Slide>
                    <Slide index={1}><Item color="#9999ff" photo={<UserOne />} name="Elenice Miranda" job=" Java Developer" number="27" /></Slide>
                    <Slide index={2}><Item color="#ffb84d" photo={<UserFour />} name="Rodrigo Galba" job=" AWS Specialist 4x certified" number="74" /></Slide>
                    <Slide index={4}><Item color="#ff4d4d" photo={<UserThree />} name="Artur Schaefer" job=" Android Developer" number="12" /></Slide>
                    <Slide index={3}><Item color="#b3c6ff" photo={<UserOne />} name="Thais R." job=" Frontend Software Engineer" number="105" /></Slide>
                    <Slide index={5}><Item color="#adad85" photo={<UserThree />} name="Paulo Bruno Serafim" job=" Software Developer at Atlantico" number="33" /> </Slide>
                    <Slide index={7}><Item color="#9999ff" photo={<UserFour />} name="Rodrigo Galba" job=" AWS Specialist 4x certified" number="74" /></Slide>
                    <Slide index={6}><Item color="#ff8080" photo={<UserOne />} name="Elenice Miranda" job=" Java Developer" number="27" /></Slide>
                </Slider>
            </Margin>
        </CarouselProvider>
    );
}

export default Carousel;
