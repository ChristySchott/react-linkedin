import styled from 'styled-components';

interface Props {
    big?: boolean;
}

interface Big {
    big?: boolean;
}

export const BoxImage = styled.div<Props>`
    width: ${({ big }) => (big ? '72px' : '48px')};
    height: ${({ big }) => (big ? '72px' : '48px')};
    position: relative;

    div:first-child {
        height: ${({ big }) => (big ? '72px' : '48px')};
        
        svg {
            width: ${({ big }) => (big ? '72px' : '48px')};
            height: ${({ big }) => (big ? '72px' : '48px')};
        }
    }

    div:nth-child(2){
        width: ${({ big }) => (big ? '16px' : '12px')};
        height: ${({ big }) => (big ? '16px' : '12px')};
        border: ${({ big }) => (big ? '4px' : '3px')} solid #469a1f;
    }
`;

export const Image = styled.div`
    border-radius: 50%;
    overflow: hidden;
`;

export const Connection = styled.div<Props>`
    position: absolute;
    bottom: 0;
    right: 2px;

    border-radius: 50%;
    border-width: 4px;
    background: #ffffff;
`;
