import React, { useState } from 'react';

import { ReactComponent as Close } from 'assets/profile/close.svg';

import {
  Container, Header, Title, Text, Icon, Nav, Pages, Category, Content,
} from './styles';
import Companys from './Companys';
import Groups from './Groups';
import Institutions from './Institutions';

interface Props {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Modal: React.FC<Props> = ({ onClick }) => {
  const [active, setActive] = useState<number>(1);

  return (
    <Container>
      <Header>
        <Title>
          <Text>Seguindo</Text>
          <Icon onClick={onClick}><Close /></Icon>
        </Title>

        <Nav>
          <Pages active={active}>
            <Category onClick={() => setActive(1)}>Empresas</Category>
            <Category onClick={() => setActive(2)}>Grupos</Category>
            <Category onClick={() => setActive(3)}>Instituições de ensino</Category>
          </Pages>
        </Nav>
      </Header>

      <Content>
        {active === 1 && <Companys />}
        {active === 2 && <Groups />}
        {active === 3 && <Institutions />}
      </Content>
    </Container>
  );
};

export default Modal;
