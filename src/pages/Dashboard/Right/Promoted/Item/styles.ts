import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const BoxImage = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 6px;
    overflow: hidden;

    img {
        width: 100%;
    }
`;

export const Text = styled.div`
    margin-left: 10px;
`;

export const Title = styled.h4`
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 600;
    color: rgba(0,0,0,0.9);
    line-height: 15px;
`;

export const Description = styled.p`
    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 400;
    color: rgba(0,0,0,0.75);
    line-height: 13px;

    max-width: 190px;
    display: flex;
    margin-top: 3px;
`;
