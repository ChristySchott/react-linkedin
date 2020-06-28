import styled from 'styled-components';

interface Props {
    small?: boolean;
    gray?: boolean;
}

interface Transform {
    transform?: boolean;
}

export const Container = styled.div<Transform>`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div:last-child {
        opacity: 0;
    }

    &:hover {
        background: #e6e6ff;

        div:last-child {
            opacity: 1;
            ${({ transform }) => (transform ? 'transform: rotate(180deg)' : '')};
            transition: all .4s ease;
        }
    }
`;

export const Text = styled.span<Props>`
    font-size: ${({ small }) => (small ? '1.2rem' : '1.5rem')};
    color: ${({ gray }) => (gray ? 'rgba(0, 0, 0, .9)' : '#0073b1')};
`;

export const Icon = styled.div`
    cursor: pointer;
`;
