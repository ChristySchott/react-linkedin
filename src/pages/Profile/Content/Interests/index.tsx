import React, { useState } from 'react';
import Wrapper from 'components/Wrapper';
import { ModalProvider } from 'styled-react-modal';

import Content from './Content';

import {
  Container, Header, Text, Title, Footer, StyledModal,
} from './styles';
import Modal from './Modal';

const Interests: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <ModalProvider>
      <Wrapper>
        <Container>
          <Header>
            <Text>
              <Title>Interesses</Title>
            </Text>
          </Header>
          <Content />
        </Container>
        <Footer onClick={toggleModal}>
          <span>Visualizar todos</span>
        </Footer>
        <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal}>
          <Modal onClick={toggleModal} />
        </StyledModal>
      </Wrapper>
    </ModalProvider>
  );
};

export default Interests;
