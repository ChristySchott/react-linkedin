import React from 'react';

import { ReactComponent as IconSearch } from 'assets/chat/search.svg';
import { ReactComponent as IconFilter } from 'assets/chat/filter.svg';

import { Container, Content, Search, Input, Filter } from './styles';

const Header: React.FC = () => {
    return <Container>
        <Content>
            <Search><IconSearch /></Search>
            <Input type="text" name="search" placeholder="Pesquisar mensagens" />
            <Filter><IconFilter /></Filter>
        </Content>
    </Container>;
}

export default Header;