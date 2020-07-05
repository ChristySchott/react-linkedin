import styled from 'styled-components';

export const Container = styled.div`
    background-color: #283e4a;
    height: 50px;
    display: flex;
`;

export const Content = styled.div`
    width: 1228px;
    max-width: 1128px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.div`
    svg {
        width: 34px;
        height: 34px;
    }
`;

export const Text = styled.a`
    color: #92a1ac;
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 500;
`;
