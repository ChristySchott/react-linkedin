import styled from 'styled-components';

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 400;
    color: rgba(0,0,0,.9);
    display: flex;
    align-items: center;
`;

export const Icon = styled.div`
    margin-right: 10px;
    height: 32px;
    svg {
        width: 32px;
        height: 32px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
`;

export const Alert = styled.button`
    width: 110px;
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

export const Margin = styled.div`
    margin-left: 20px;
`
