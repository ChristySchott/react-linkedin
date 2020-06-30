import React from 'react';

import { ReactComponent as IconMore } from 'assets/messages/more.svg';

import {
    Container, Infos, Name, Online, More, Status,
} from './styles';

const Header: React.FC = () => (
    <Container>
        <Infos>
            <Name>Ada Lovelace</Name>
            <Online>
                <Status />
                Dispositivo móvel &middot; há 1 d
            </Online>
        </Infos>

        <More>
            <IconMore />
        </More>
    </Container>
);

export default Header;
