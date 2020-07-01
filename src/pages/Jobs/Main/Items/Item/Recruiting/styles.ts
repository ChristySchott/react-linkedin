import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const BoxImages = styled.div`
    svg {
        width: 24px;
        height: 24px;
        color: #2f7b15;
    }
`

export const Text = styled.div`
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-size: 1.2rem;
        color: rgba(0, 0, 0, 0.6);
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.42857;
    }
`
