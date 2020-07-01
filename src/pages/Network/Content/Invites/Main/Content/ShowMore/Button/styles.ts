import styled from 'styled-components';

export const Container = styled.button`
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 167ms;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 500;
    color: #0073b1;;
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 10px 0;
    margin-left: 23px;
    background: transparent;
    height: 25px;
    width: 105px;

    &:focus{
        border: none;
        outline: none;
    }
`;

export const Text = styled.span`
`;

export const Box = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border-bottom: 1px solid rgba(0,0,0,.15);

    &:hover {
        background-color: #e6f7ff;
    }
`;
