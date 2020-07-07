import React from 'react';

import { ReactComponent as Drop } from 'assets/profile/drop.svg';

import {
  Container, People, Icon, Filters, Type, Local, Companys,
  Actions, All, Clean, Actives,
} from './styles';

const Menu: React.FC = () => (
  <Container>
    <People>
      <span>Pessoas</span>
      <Icon><Drop /></Icon>
    </People>

    <Filters>
      <Type>
        <span>1º</span>
        <Icon><Drop /></Icon>
      </Type>

      <Local>
        <span>Localidades</span>
        <Icon><Drop /></Icon>
      </Local>

      <Companys>
        <span>Empresas atuais</span>
        <Icon><Drop /></Icon>
      </Companys>
    </Filters>

    <Actions>
      <All><span>Todos os filtros</span></All>
      <Clean>
        <span>Limpar</span>
        <Actives>1</Actives>
      </Clean>
    </Actions>
  </Container>
);

export default Menu;
