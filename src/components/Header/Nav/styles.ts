import styled from 'styled-components';

import Modal, { BaseModalBackground } from 'styled-react-modal';

export const Container = styled.div`
  position: relative;   
`;

export const NavMain = styled.ul`
display: flex;
align-items: center;
li:hover {
    color: #ffffff;
    fill: #ffffff;
}
`;

export const ModalUser = Modal.styled`
  width: 288px;
  height: 441px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  position: fixed;
  top: 60px;
  right: 355px;
`;

export const ModalSolution = Modal.styled`
  width: 380px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  position: fixed;
  top: 52px;
  right: 0;
`;

export const ModalBackground = styled(BaseModalBackground)`
  opacity: 1;
  background: none;
`;
