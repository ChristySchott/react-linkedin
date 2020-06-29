import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    border-top: 1px solid #cfcfcf;
    min-height: 100px;
`;

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding: 0 16px;
`;

export const Image = styled.div`
    width: 56px;
    margin-right: 12px;

    img {
        width: 48px;
        height: 48px;
    }
`;

export const Activity = styled.div`
    width: 410px;
    max-width: 410px;
    margin: 4px 12px 0 0;

    font-size: 1.4rem;
    line-height: 1.42857;
    color: rgba(0, 0, 0, .9);
    font-weight: 400;
`;

export const More = styled.div`
    width: 24px;
    color: rgba(0, 0, 0, .6);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    svg {
        width: 24px;
        height: 24px;
    }

    span {
        font-size: 1.2rem;
        line-height: 1.33333;
        font-weight: 400;
        margin-top: 5px;
    }
`;
