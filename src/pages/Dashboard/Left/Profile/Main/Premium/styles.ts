import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 15px;
`;

export const Tools = styled.h3`
    font-size: 1.2rem;
    line-height: 1.33333;
    color: rgba(0,0,0,.6);
    font-weight: 400;
`;

export const CTA = styled.div`
    display: flex;
    align-items: center;

    svg {
        width: 10px;
        height: 10px;
    }
    span {
        margin-left: 5px;
        color: rgba(0,0,0,.9);
    }
`;
