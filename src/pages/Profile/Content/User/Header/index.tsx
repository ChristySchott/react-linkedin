import React, { useState } from 'react';
import { ModalProvider } from 'styled-react-modal';

import { ReactComponent as Pencil } from 'assets/profile/pencil.svg';
import { ReactComponent as PencilBig } from 'assets/profile/pencilBig.svg';
import { ReactComponent as DropIcon } from 'assets/profile/drop.svg';

import {
  Container, Cover, Icon, Infos, Photo,
  Actions, Add, Drop, More, Edit, StyledModal,
} from './styles';
import Modal from './Modal';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <ModalProvider>
      <Container>
        <Cover>
          <img src="https://media-exp1.licdn.com/dms/image/C4D16AQGpmU8uxMw-EQ/profile-displaybackgroundimage-shrink_350_1400/0?e=1599091200&v=beta&t=noEs9gLtrid8KdnpUURIH2CGqjM7DVbqBZTYrc8zU20" alt="" />
          <Icon><Pencil /></Icon>
        </Cover>
        <Infos>
          <Photo><img src="https://media-exp1.licdn.com/dms/image/C4E03AQGArBZoTlAL5Q/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=JXSG-XBL5KiTpFNaoep8V-K7JwhvadNfwmvx4VellKA" alt="" /></Photo>
          <Actions>
            <Add>
              Adicionar sessão do perfil
              <Drop><DropIcon /></Drop>
            </Add>
            <More>Mais...</More>
            <Edit onClick={toggleModal}><PencilBig /></Edit>
            <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal}>
              <Modal onClick={toggleModal} />
            </StyledModal>
          </Actions>
        </Infos>
      </Container>
    </ModalProvider>
  );
};

export default Header;
