import styled from 'styled-components';

export const Container = styled.div`
    background-color: #f3f6f8;
    padding: 16px;
    height: 80px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        font-size: 1.4rem;
        line-height: 1.42857;
        color: rgba(0,0,0,.6);
        font-weight: 400;
    }

    a {
        margin-top: 5px;
        font-size: 1.6rem;
        line-height: 1.5;
        font-weight: 600;
        color: #0073b1;
    }
`;
