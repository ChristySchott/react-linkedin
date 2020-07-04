import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as IconSearch } from 'assets/messages/search.svg';
import { ReactComponent as IconFilter } from 'assets/messages/filter.svg';

import {
    Container, Input, BoxSearch, BoxFilter,
} from './styles';

const Search: React.FC = () => (
    <Container>
        <Input type="text" name="messages" placeholder="Pesquisar mensagens" />
        <BoxSearch>
            <IconSearch />
        </BoxSearch>
        <BoxFilter>
            <Link to="/">
                <IconFilter />
            </Link>
        </BoxFilter>
    </Container>
);

export default Search;
