import React from 'react';
import Wrapper from 'components/Wrapper';
import Top from './Top';
import Bottom from './Bottom';

// import { Container } from './styles';

const Notification: React.FC = () => (
    <Wrapper>
        <Top />
        <Bottom />
    </Wrapper>
);

export default Notification;
