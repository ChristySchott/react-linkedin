import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 60px 0 90px 0;
`;

export const Content = styled.div`
    max-width: 1128px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    div:nth-child(1) {
        margin-right: 16px;
    }
`;

export const Card = styled.div`
    width: 556px;
`;

export const Image = styled.div`
    width: 300px;
    height: 240px;

    svg {
        max-width: 300px;
        height: auto;
        margin: 0 72px 56px 0;
    }

`;

export const Title = styled.div`
    margin-bottom: 40px;    
`;

export const Text = styled.h1`
    font-size: 4.8rem;
    line-height: 1.16667;
    font-weight: 400;
    color: rgba(0,0,0,0.9);
    font-family: sans-serif;
    line-height: 60px;
    font-weight: 200;

    display: flex;
    max-width: 456px;
`;

export const Button = styled.button`
    width: 305px;
    height: 56px;
    padding: 8 20px;
    margin: 0 6px 12px 0;
    border: solid 1px rgba(0,0,0,0.6);
    background: transparent;
    font-size: 2rem;
    line-height: 1.4;
    font-weight: 500;
    color: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 28px;
    cursor: pointer;

    &:hover {
        background-color: rgba(0,0,0,0.2);
    }
`;

export const BoxInput = styled.div`
    position: relative;
    width: 360px;
    cursor: pointer;
`;

export const Input = styled.input`
    width: 360px;
    height: 62px;
    padding: 16px 0 16px 16px;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 5px;
    font-size: 2rem;
    line-height: 1.4;
    font-weight: 400;

    ::-webkit-input-placeholder {
        color: rgba(0,0,0,.9);
     }
`;

export const Icon = styled.div`
    position: absolute;
    right: 15px;
    bottom: 19px;
    width: 24px;
    height: 24px;

    svg {
        width: 24px;
        height: 24px;
        color: rgba(0,0,0,.6);
    }
`;
