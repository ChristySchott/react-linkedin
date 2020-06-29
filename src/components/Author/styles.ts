import styled from 'styled-components';

export const BoxImage = styled.div`
    width: 48px;
    height: 48px;
    position: relative;
`;

export const Image = styled.div`
    border-radius: 50%;
    height: 48px;
    overflow: hidden;

    svg {
        width: 48px;
        height: 48px;
    }
`;

export const Connection = styled.div`
    position: absolute;
    bottom: 0;
    right: 2px;

    width: 12px;
    height: 12px;

    border-radius: 50%;
    border-width: 4px;
    border: 3px solid #469a1f;
    background: #ffffff;
`;
