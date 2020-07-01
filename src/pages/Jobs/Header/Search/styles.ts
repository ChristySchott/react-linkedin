import styled from 'styled-components';

export const Container = styled.div`
    height: 130px;
    width: 100%;
    background-color: #f3f6f8;
    padding: 24px 0;
    border-radius: 2px;
    margin: 20px 0;
    border: 1px solid rgba(0,0,0,.04);
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
`;

export const Title = styled.h2`
    font-size: 2.4rem;
    line-height: 1.33333;
    font-weight: 100;
    color: rgba(0,0,0,.9);
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 64px;
`;

export const Inputs = styled.div`
    display: flex;
    align-items: center;

    div {
        margin-right: 8px;
    }
`;

export const Button = styled.div`
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 167ms;
    align-items: center;
    border: none;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 6.4rem;
    max-width: 480px;
    padding: 1rem 1.6rem;
    margin-left: 8px;  

    font-weight: 600;
    font-size: 1.6rem;
    min-height: 4rem;

    background-color: #0073b1;
    color: #fff;
`;
