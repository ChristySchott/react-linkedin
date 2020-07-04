import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    height: 840px;
    margin-top: -250px;
    padding-top: 270px;
`;

export const Background = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;

    svg {
        width: 150%;
        height: 150%;
    }
`

export const Content = styled.div`
    width: 1128px;
    height: 268px;
    margin: 0 auto;
    background: none;
`

export const Title = styled.div`
    margin: 20px 0 40px;
`

export const Text = styled.h1`
    font-size: 5.6rem;
    font-family: sans-serif;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
`

export const Button = styled.button`
    width: 130px;
    height: 56px;
    background-color: #2977c9;
    color: #fff;
    font-weight: normal;
    font-size: 2rem;
    line-height: 1.4;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 28px; 
`
