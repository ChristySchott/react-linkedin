import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    height: 99px;
    display: flex;
`;

export const Content = styled.div`
    width: 1128px;
    max-width: 1128px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const Logo = styled.div`
    margin-top: -15px;
    align-self: flex-start;
    svg {
        width: 78px;
        height: 8px;
        fill: #fff;
    }
`;

export const Text = styled.h1`
    font-size: 2.4rem;
    line-height: 1.33333;
    font-weight: 500;
    color: #fff;
`;

export const Background = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #004b7c;
    z-index: -1;
    max-height: 99px;
    overflow: hidden;
`;
