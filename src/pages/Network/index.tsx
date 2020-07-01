import React from 'react';

import Publish from 'components/Publish';
import Ad from 'components/Ad';
import {
    WrapperAd, Container, Main, Aside,
} from './styles';

const Network: React.FC = () => (
    <WrapperAd>
        <Ad />
        <Container>
            <Aside>
                <Publish banner />
            </Aside>
            <Main>
                Oi
            </Main>
        </Container>
    </WrapperAd>
);

export default Network;