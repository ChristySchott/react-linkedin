import styled from 'styled-components';

import Modal, { BaseModalBackground } from 'styled-react-modal';

interface Props {
  active: number;
  notification: any;
}

export const Container = styled.div`
  position: relative;   
`;

export const NavMain = styled.ul<Props>`
  display: flex;
  align-items: center;
  li:hover {
    color: #ffffff;
    fill: #ffffff;
  }

  li:nth-of-type(7) {
    border-left: 1px solid #5c6f7c;

    svg {
      fill: #ffffff;
    }
  }

  li:nth-of-type(${({ active }) => active}) {
    a::after {
       display: block;
       content: "";
       position: absolute;
       width: 100%;
       left: 0;
       bottom: -6px;
       border-bottom: 2px solid #fff;
       
   }
    a {
      color: #ffffff;
    }
    svg {
      fill: #ffffff;
    }
  }

  li:nth-of-type(${({ notification }) => notification[0]}) {
    a {
      span:nth-child(2) {
        display: none;
      }
    }
  }

  li:nth-of-type(${({ notification }) => notification[1]}) {
    a {
      span:nth-child(2) {
        display: none;
      }
    }
  }

`;

export const Premium = styled.li`
  a {
  font-size: 1.2rem;
  line-height: 1.33333;
  max-width: 125px;
  color: #dccea4;
  }

  a:hover {
    text-decoration: underline solid #dccea4;
  }
`;

export const ModalUser = Modal.styled`
  width: 288px;
  height: 443px;
  padding-top: 20px;
  background: white;
  position: fixed;
  top: 64px;
  right: 305px;
  border-radius: 2px;
  border: none;
  box-shadow: 0 0 0 1px rgba(0,0,0,.02), 0 3px 9px rgba(0,0,0,.2);
`;

export const ModalSolution = Modal.styled`
  width: 380px;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f3f6f8;
  position: fixed;
  top: 56px;
  right: 0;
  overflow-y: scroll;
`;

export const ModalBackground = styled(BaseModalBackground)`
  opacity: 1;
  background: none;
`;
