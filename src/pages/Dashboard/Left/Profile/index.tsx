import React from 'react';

import Wrapper from 'components/Wrapper';
import { ReactComponent as Save } from 'assets/left/save.svg';
import { Container, Footer } from './styles';
import Header from './Header';
import Main from './Main';

const Profile: React.FC = () => (
    <Container>
        <Wrapper>
            <Header />
            <Main />
            <Footer>
                <Save />
                <span>Itens salvos</span>
            </Footer>
        </Wrapper>
    </Container>
);

export default Profile;
