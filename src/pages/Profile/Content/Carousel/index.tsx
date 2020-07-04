import React from 'react';
import {
    CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Nav from './Nav';

import { ReactComponent as MoreIcon } from 'assets/profile/more.svg';
import { ReactComponent as Pencil } from 'assets/profile/pencilBig.svg';

import {
    Menu, Title, Button, Buttons, Alert, Margin
} from './styles';
import Item from './Item';
import Wrapper from 'components/Wrapper';

function Carousel() {
    return (
        <Wrapper>
            <CarouselProvider
                naturalSlideWidth={308}
                naturalSlideHeight={317}
                totalSlides={5}
                visibleSlides={2.5}
            >
                <Menu>
                    <Title>Em destaque</Title>
                    <Buttons>
                        <Alert><span>Visualizar todos</span></Alert>
                        <ButtonBack><Nav back /></ButtonBack>
                        <ButtonNext><Nav /></ButtonNext>
                        <Button><MoreIcon /></Button>
                        <Button><Pencil /></Button>
                    </Buttons>
                </Menu>

                <Margin>
                    <Slider>
                        <Slide index={0}><Item image="https://mindpersuasion.com/wp-content/uploads/2013/08/aug7_mario-300x300.jpg" /></Slide>
                        <Slide index={1}><Item image="https://mindpersuasion.com/wp-content/uploads/2013/08/aug7_mario-300x300.jpg" /></Slide>
                        <Slide index={2}><Item image="https://mindpersuasion.com/wp-content/uploads/2013/08/aug7_mario-300x300.jpg" /></Slide>
                        <Slide index={3}><Item image="https://mindpersuasion.com/wp-content/uploads/2013/08/aug7_mario-300x300.jpg" /></Slide>
                        <Slide index={4}><Item image="https://mindpersuasion.com/wp-content/uploads/2013/08/aug7_mario-300x300.jpg" /></Slide>
                    </Slider>
                </Margin>
            </CarouselProvider>
        </Wrapper>
    );
}

export default Carousel;
