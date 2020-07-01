import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 12px;
    height: 96px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
`;

export const Common = styled.div`   
    display: flex;
    align-items: center;
`

export const Icon = styled.div`
    svg {
        width: 16px
        height: 16px;
        color: rgba(0,0,0,.6);
    }
    margin-right: 5px;
`

export const Text = styled.span`
    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 400;
    color: rgba(0,0,0,.6);
`

export const Button = styled.button`
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.6rem;
    font-weight: 600;
    min-height: 3.2rem;
    padding: .6rem 1.2rem;
    line-height: 2rem;
    background-color: transparent;
    color: #0073b1;
    box-shadow: inset 0 0 0 1px #0073b1; 

    &:hover {
        background-color: rgba(152,216,244,.25);
        color: #006097;
        box-shadow: inset 0 0 0 1px #006097; 
    }
`


