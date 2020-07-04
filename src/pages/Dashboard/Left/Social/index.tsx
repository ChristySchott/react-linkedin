import React from 'react';

import Sticky from 'react-stickynode';
import Wrapper from 'components/Wrapper';
import Category from './Category';
import { Container, Footer } from './styles';
import Item from './Item';

const Social: React.FC = () => (
    <Sticky top={60}>
        <Container>
            <Wrapper>
                <Category title="Recentes" gray>
                    <Item text="JavaScript" />
                    <Item text="Front End Developer Group" />
                    <Item hashtag text="softwaredeveloper" />
                    <Item hashtag text="github" />
                    <Item hashtag text="androidevelopment" />
                </Category>
                <Category title="Grupos">
                    <Item text="JavaScript" />
                    <Item text="Front End Developer Group" />
                    <Item text="HTML5 / CSS3 / JavaScript" />
                </Category>
                <Category title="Hashtags seguidas">
                    <Item hashtag text="softwaredeveloper" />
                    <Item hashtag text="github" />
                    <Item hashtag text="androidevelopment" />
                </Category>
                <Footer>Descubra mais</Footer>
            </Wrapper>
        </Container>
    </Sticky>
);

export default Social;
