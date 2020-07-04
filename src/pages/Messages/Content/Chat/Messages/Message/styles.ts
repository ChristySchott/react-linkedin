import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 0 15px;
    margin-bottom: 20px;
`;

export const Box = styled.div`
    width: 32px;
    height: 38px;
    display: flex;
    align-items: flex-start;
    
    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
`;

export const Text = styled.div`
    margin: 5px 0 0 20px;
`;

export const Name = styled.span`
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 600;
    color: rgba(0,0,0,.9);
`;

export const Connection = styled.span`
    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 400;
    color: rgba(0,0,0,.9);
`;

export const Infos = styled.div``;

export const Content = styled.div`
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 400;
    color: rgba(0,0,0,.9);

    margin-top: 5px;
`;
