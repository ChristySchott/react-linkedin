import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`;

export const Search = styled.input`
    font-size: 1.6rem;
    line-height: 1.75;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.9);
    box-sizing: border-box;
    width: 437.73px;
    height: 40px;
    padding-left: 42px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 2px;
`;

export const Icon = styled.div`
    position: absolute;
    left: 10px;
    bottom: 0;
    width: 24px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        width: 24px;
        height: 24px;
        color: rgba(0, 0, 0, 0.75);
    }
`;
