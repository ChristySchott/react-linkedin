import React from 'react';

import Container from './styles';
import Header from './Header';
import Infos from './Infos';
import Wrapper from 'components/Wrapper';

const User: React.FC = () => {
    return (
        <Wrapper><Container>
            <Header />
            <Infos />
        </Container>
        </Wrapper>);
}

export default User;