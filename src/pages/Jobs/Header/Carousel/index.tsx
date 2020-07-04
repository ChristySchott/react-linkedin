import React from 'react';
import {
    CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Nav from './Nav';

import {
    Menu, Title, Buttons, Alert,
} from './styles';
import Item from './Item';

function Carousel() {
    return (
        <CarouselProvider
            naturalSlideWidth={323}
            naturalSlideHeight={70}
            totalSlides={5}
            visibleSlides={3.5}
        >
            <Menu>
                <Title>Pesquisas de vagas</Title>
                <Buttons>
                    <Alert><span>Gerenciar alertas</span></Alert>
                    <ButtonBack><Nav back /></ButtonBack>
                    <ButtonNext><Nav /></ButtonNext>
                </Buttons>
            </Menu>

            <Slider>
                <Slide index={0}><Item name="estágio+front" news=" (1 nova)" alert="Alerta ativado Brasil" /> </Slide>
                <Slide index={1}><Item name="pixter" news=" (3 novas)" alert="Brasil" /></Slide>
                <Slide index={2}><Item name="web developer" news=" (1.884 novas)" alert="Alerta ativado Mundialmente" /></Slide>
                <Slide index={3}><Item name="Porto Alegre" news=" (242 novas)" /></Slide>
                <Slide index={4}><Item name="Front End" news=" (3.884 novas)" /></Slide>
            </Slider>
        </CarouselProvider>
    );
}

export default Carousel;
