import styled from 'styled-components';

export const Container = styled.div`
    height: 40px;
    width: 100%;
    padding: 5px 10px;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Icons = styled.ul`
    display: flex;
    align-items: center;
    position: relative;
`;

export const Icon = styled.li`
    button {
        width: 40px;
        height: 40px;
        border: none;
        background: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    svg {
      width: 24px;
      height: 24px;
      color: rgba(0,0,0,.6);
    }
`;

export const BoxCta = styled.div`
    display: flex;
    align-items: center;
`;

export const Button = styled.button`
    width: 64px;
    height: 24px;
    background-color: rgba(0,115,177,.35);
    color: hsla(0,0%,100%,.45);
    font-weight: 600;
    border: none;
    border-radius: 2px;
    font-size: 1.4rem;
    min-height: 2.4rem;
    padding: .2rem .8rem;
    line-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
`;

export const Svg = styled.button`
    width: 32px;
    height: 32px;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 16px;
      height: 16px;
      color: rgba(0,0,0,.6);
    }
`;

export const Emojis = styled.div`
    position: absolute;
    top: -320px;
    right: -250px;
`;
