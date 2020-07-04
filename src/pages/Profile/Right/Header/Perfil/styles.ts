import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-bottom: 15px;
`;

export const Item = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`

export const Text = styled.h3`
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 500;
    color: rgba(0,0,0,.6);
`

export const Icon = styled.div`
    svg {
        width: 16px;
        height: 16px;
        color: rgba(0,0,0,.6);
    }
`

export const Hr = styled.hr`
    border: 0;
    border-top: 1px solid rgba(0,0,0,.15);
    display: block;
    height: 1px;
    width: 100%;
    margin: 16px 0;
`


