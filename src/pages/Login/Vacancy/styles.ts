import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f1ece5;
  padding: 60px 0;
`;

export const Content = styled.div`
    max-width: 1128px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`


export const Title = styled.div`
    margin-bottom: 40px;  
    width: 513px;
    margin-right: 67px;  
`

export const Text = styled.h1`
    font-size: 4rem;
    line-height: 1.16667;
    font-weight: 400;
    color: #B24020;
    font-family: sans-serif;
    line-height: 60px;
    font-weight: 200;

    display: flex;
    max-width: 456px;
`

export const Button = styled.button`
    width: 210px;
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

    &:hover {
        background-color: rgba(0,0,0,0.2);
    }
`
