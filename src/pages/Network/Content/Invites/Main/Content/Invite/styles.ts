import styled from 'styled-components';

export const Container = styled.li`
    height: 96px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,.15);
    padding: 0 15px;
    
    &:hover {
        background-color: #e6f7ff;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
`;

export const BoxImage = styled.div`
    width: 80px;
    height: 72px;
    display: flex;
    justify-content: flex-start;
`;

export const Image = styled.div`
    width: 72px;
    height: 72px;

    border-radius: 50%;
    overflow: hidden;

    img {
        width: 72px;
        height: 72px;
    }
`;

export const Text = styled.div``;

export const Name = styled.span`
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 600;
    color: rgba(0,0,0,.9);
    display: block;
`;

export const Job = styled(Name)`
    font-size: 1.5rem;
    font-weight: 400;
    color: rgba(0, 0, 0, .6);
    line-height: 1.2;
`;

export const Connections = styled(Job)``;

export const Actions = styled.div`
    display: flex;
    align-items: center;
`;

export const Ignore = styled.button`
    width: 70px;
    height: 32px;
    background-color: transparent;
    color: rgba(0,0,0,.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    
    border: none;
    border-radius: 2px;
    font-weight: 500;
    margin-right: 10px;
`;

export const Accept = styled(Ignore)`
    border: 1px solid #0073b1;
    color: #0073b1;
    margin: 0;
    padding: 1.6rem 1.4rem;
    width: 76px;

    &:hover {
        background-color: rgba(152,216,244,.25);
        color: #006097;
        box-shadow: inset 0 0 0 1px #006097; 
    }
`;
