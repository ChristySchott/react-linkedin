import styled from 'styled-components';

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
`;

export const Title = styled.h2`
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    color: rgba(0,0,0,.9);
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
`;

export const Alert = styled.button`
    width: 138px;
    height: 34px;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 167ms;
    align-items: center;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    font-family: inherit;
    font-weight: 600;
    display:flex;
    align-items: center;
    justify-content: center;
    min-width: 6.4rem;
    background: transparent;

    &:hover {
        background-color: rgba(152,216,244,.25);
        color: #006097;
    }

    span {
        font-size: 1.5rem;
        line-height: 2rem;
        color: #0073b1;
    }

`;
