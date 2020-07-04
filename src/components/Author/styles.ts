import styled from 'styled-components';

interface Props {
    big?: boolean;
    small?: boolean;
}

export const BoxImage = styled.div<Props>`
    width: ${({ big }) => (big ? '72px' : '48px')};
    height: ${({ big }) => (big ? '72px' : '48px')};
    ${({ small }) => small && 'width: 40px; height: 40px;'}

    position: relative;

    div:first-child {
        height: ${({ big }) => (big ? '72px' : '48px')};
        ${({ small }) => small && 'height: 40px;'}

        img {
            width: ${({ big }) => (big ? '72px' : '48px')};
            height: ${({ big }) => (big ? '72px' : '48px')};
            ${({ small }) => small && 'width: 40px; height: 40px;'}
            border-radius: 50%;
        }
    }

    div:nth-child(2){
        width: ${({ big }) => (big ? '16px' : '12px')};
        height: ${({ big }) => (big ? '16px' : '12px')};
        border: ${({ big }) => (big ? '4px' : '3px')} solid #469a1f;
        ${({ small }) => small && 'width: 8px; height: 8px; border: 2px solid #469a1f;'}
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
