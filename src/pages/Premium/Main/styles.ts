import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Button = styled.button`
    width: 530px;
    height: 40px;
    padding: 10px 16px;
    font-size: 1.6rem;
    min-height: 4rem;
    line-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    color: #0073b1;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15);

    &:hover {
        background-color: rgba(152,216,244,.25);
        color: #006097;
    }
`;
