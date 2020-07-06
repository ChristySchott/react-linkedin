import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';

import {
  Container, User, Name, Job, Place, Connections,
  Box, Contact, Company, Item, Image, NameCompany, StyledModal,
}
  from './styles';
import Modal from './Modal';

const Infos: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <ModalProvider>
      <Container>
        <User>
          <Name>Christy Hauschild Schott</Name>
          <Job>Intern Developer | React | TypeScript | Redux</Job>
          <Box>
            <Place>Venâncio Aires, Rio Grande do Sul, Brasil</Place>
            &middot;
            <Link to="/connections"><Connections>+ de 500 conexões</Connections></Link>
          </Box>
          <Contact onClick={toggleModal}>Informações de contato</Contact>
          <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal}>
            <Modal onClick={toggleModal} />
          </StyledModal>
        </User>
        <Company>
          <Item>
            <Image><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQFYrLnUuKUX2A/company-logo_100_100/0?e=1601510400&v=beta&t=aLP0HeiCs4fKBKW_i_jHhhFNOyElyZigS30DO8wpi9s" alt="" /></Image>
            <NameCompany>Kobe - Creative Software House</NameCompany>
          </Item>
          <Item>
            <Image><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQH9V1274sm9GA/company-logo_100_100/0?e=1601510400&v=beta&t=r7QG86XRPWCQpg9XY59oN7zLTG3k0FjkSvjBMrScg40" alt="" /></Image>
            <NameCompany>IGTI</NameCompany>
          </Item>
        </Company>
      </Container>
    </ModalProvider>
  );
};

export default Infos;
