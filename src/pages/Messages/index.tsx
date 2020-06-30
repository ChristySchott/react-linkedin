import React from 'react';

import Publish from 'components/Publish';
import Ad from 'components/Ad';
import {
    WrapperAd, Container, Main, Aside,
} from './styles';
import Content from './Content';

const Jobs: React.FC = () => (
    <WrapperAd>
        <Ad />
        <Container>
            <Main>
                <Content />
            </Main>
            <Aside>
                <Publish banner />
            </Aside>
        </Container>
    </WrapperAd>
);

export default Jobs;
