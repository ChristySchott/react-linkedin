import styled from 'styled-components';

export const Container = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

export const Content = styled.div`
    height: 32px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`;

export const List = styled.ul`
    display: flex;
    align-items: center;

    li:not(:first-of-type){
        border-left: 1px solid rgba(0,0,0,.15);
    }
`;

export const Cta = styled.div`

`;

export const Button = styled.button`
    width: 145px;
    height: 32px;
    background-color: transparent;
    color: #0073b1;
    box-shadow: inset 0 0 0 1px #0073b1;
    border-radius: 2px;
    font-size: 1.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 16px;
        height: 16px;
    }
    
    span {
        line-height: 2rem;
        margin-right: 5px;
        font-weight: 600;
        margin-left: 5px;
    }

    &:hover {
        background-color: rgba(152,216,244,.25);
        color: #006097;
        box-shadow: inset 0 0 0 2px #006097;
    }
`;
