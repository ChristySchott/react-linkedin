import styled from 'styled-components';

export const Container = styled.div`
    padding: 24px;
    margin: 15px 0;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.h2`
    font-size: 1.8rem;
    line-height: 1.4;
    font-weight: 400;
    color: rgba(0,0,0,.9);
`

export const Button = styled.button`
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 40px;
    height: 40px;
    svg {
        color: #0073b1;
        width: 24px;
        height: 24px;
    }

    &:hover {
        background-color: rgba(152,216,244,.25);
        color: #006097;
    }
`

export const Content = styled.div`
    margin-top: 20px;
`

export const Text = styled.p`
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 400;
    color: rgba(0,0,0,.9);
`
