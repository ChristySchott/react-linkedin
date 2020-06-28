import React from 'react';

import Ad from 'components/Ad';
import {
    WrapperAd, Container, Aside, Core, AsideRight,
} from './styles';
import Left from './Left';
import Right from './Right';
import Main from './Main';

const Dashboard: React.FC = () => (
    <WrapperAd>
        <Ad />
        <Container>
            <Aside>
                <Left />
            </Aside>
            <Core>
                <Main />
            </Core>
            <AsideRight>
                <Right />
            </AsideRight>
        </Container>
    </WrapperAd>
);

export default Dashboard;
