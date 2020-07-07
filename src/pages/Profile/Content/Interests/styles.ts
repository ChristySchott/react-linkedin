import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const Container = styled.div`
    height: 305px;
    padding: 24px;
    margin: 15px 0;

    div:nht-child(2) {
        box-shadow: 0 2px 3px rgba(0,0,0,.2);
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Text = styled.div``;

export const Title = styled.h2`
    font-size: 1.8rem;
    line-height: 1.4;
    font-weight: 400;
    color: rgba(0,0,0,.9);
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 41px;
    border-top: 1px solid rgba(0,0,0,.15);
    cursor: pointer;

    &:hover {
        background-color: rgba(152,216,244,.25);
        span {
            color: #006097;
        }
    }

    span {
        font-size: 1.5rem;
        font-weight: 500;
        color: #0073b1; 
        line-height: 2rem;
    }
`;

export const StyledModal = Modal.styled`
  width: 744px;
  height: 515px;
  background: white;
  top: 0;
`;
