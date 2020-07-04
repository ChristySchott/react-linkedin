import styled from 'styled-components';

export const Container = styled.button`
    margin-bottom: 16px;
    width: 408px;
    height: 60px;
    padding: 16px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.15), 0 4px 6px rgba(0,0,0,0.2);
    border: 0;
    display: block;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Text = styled.span`
    font-size: 2rem;
    line-height: 1.4;
    font-weight: 400;
    color: rgba(0,0,0,0.9);
`;

export const Icon = styled.div`
    svg {
        width: 24px;
        height: 24px;
    }
`;
