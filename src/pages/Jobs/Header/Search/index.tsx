import React from 'react';

import { ReactComponent as SearchIcon } from 'assets/jobs/search.svg';
import { ReactComponent as MapIcon } from 'assets/jobs/map.svg';

import {
    Container, Header, Title, Content, Inputs, Button,
} from './styles';
import Input from './Input';

const Search: React.FC = () => (
    <Container>
        <Header><Title>Procure um novo emprego</Title></Header>
        <Content>
            <Inputs>
                <Input icon={<SearchIcon />} name="search" text="Pesquisar cargo, competência ou empresa" />
                <Input icon={<MapIcon />} name="map" text="Cidade, estado ou código postal" />
            </Inputs>
            <Button>Pesquisar</Button>
        </Content>
    </Container>
);

export default Search;
