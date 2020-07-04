import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Text = styled.span`
    font-size: 1.5rem;
    font-weight: 400;
    color: rgba(0,0,0,.9);
`;

export const Icon = styled.div`
    cursor: pointer;
    svg {
        color: rgba(0,0,0,.6);
    }
`;
