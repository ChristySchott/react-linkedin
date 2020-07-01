import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const BoxImages = styled.div`
    img {
        width: 24px;
        height: 24px;
    }
`

export const Image = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 4px;
    overflow: hidden;
`;

export const Text = styled.div`
    margin-left: 6px;
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
