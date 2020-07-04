import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 67px;    
    padding: 0 20px 30px 35px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const Info = styled.div`
    display: flex;
`

export const Number = styled.div`
    width: 44px;
    height: 67px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0 10px 15px 0;

    span {
        color: #0073b1;
        font-size: 3.2rem;
        line-height: 1.25;
        font-weight: 400;
    }
`

export const Infos = styled.div`
    margin-left: 7px;
`

export const Name = styled.span`
    font-size: 1.5rem;
    line-height: 1.4;
    font-weight: 500;
    color: #0073b1;
    max-width: 600px;
    display: flex;
`

export const Resume = styled.span`
    font-size: 1.3rem;
    line-height: 1.3;
    font-weight: 400;
    color: rgba(0,0,0,.9);
    display: block;
`

export const Icon = styled.button`
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 32px;
    height: 32px;
    svg {
        color: #0073b1;
        width: 16px;
        height: 16px;
    }

    &:hover {
        background-color: rgba(152,216,244,.25);
        color: #006097;
    }

    margin-left: 8px;
`


