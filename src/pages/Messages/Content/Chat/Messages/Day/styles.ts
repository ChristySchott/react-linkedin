import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 25px;
    display: flex;
    align-items: center;
`;

export const Divider = styled.div`
    width: 100%;
    border: 1px solid rgba(0,0,0,.15);
`;

export const Time = styled.div`
    margin: 0 10px;
    min-width: 96px;

    span {
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 1.2rem;
        line-height: 1.33333;font-weight: 600;
        color: rgba(0,0,0,.6);
    }
`;
