import React from 'react';

import { ReactComponent as Close } from 'assets/profile/close.svg';
import { ReactComponent as Pencil } from 'assets/profile/pencilBig.svg';

import {
  Container, Header, Title, Text, Icon, IconEdit, Content,
} from './styles';
import Items from './Items';

interface Props {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Modal: React.FC<Props> = ({ onClick }) => (
  <Container>
    <Header>
      <Title>
        <Text>Christy Hauschild</Text>
        <Icon onClick={onClick}><Close /></Icon>
      </Title>
    </Header>

    <Content>
      <Title>
        <Text>Informações de contato</Text>
        <IconEdit><Pencil /></IconEdit>
      </Title>
      <Items />
    </Content>
  </Container>
);

export default Modal;
