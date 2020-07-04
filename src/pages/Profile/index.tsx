import React from 'react';

import Ad from 'components/Ad';
import {
    WrapperAd, Container, Main, Aside,
} from './styles';
import Right from './Right';
import Content from './Content';
import Footer from './Footer';

const Profile: React.FC = () => (
    <WrapperAd>
        <Ad />
        <Container>
            <Main>
                <Content />
            </Main>
            <Aside>
                <Right />
            </Aside>
        </Container>
        <Footer />
    </WrapperAd>
);

export default Profile;
