import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0;
`;

export const BoxImage = styled.div`
    width: 48px;
    height: 48px;
    position: relative;
`;

export const Image = styled.div`
    border-radius: 50%;
    height: 48px;
    overflow: hidden;

    svg {
        width: 48px;
        height: 48px;
    }
`;

export const Connection = styled.div`
    position: absolute;
    bottom: 0;
    right: 2px;

    width: 12px;
    height: 12px;

    border-radius: 50%;
    border-width: 4px;
    border: 3px solid #469a1f;
    background: #ffffff;
`;

export const Text = styled.div`
    padding-left: 10px;
    display: flex;
    flex-direction: column;
`;

export const Name = styled.div`
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.42857;
    color: rgba(0,0,0,.9);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 460px;

    span {
        color: rgba(0,0,0,.6);
        font-weight: 400;
        margin-left: 3px;
    }
    
    svg {
        width: 24px;
        height: 24px;
        color: rgba(0, 0, 0, .6);
    }
`;

export const Job = styled.span`
    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 400;
    color: rgba(0,0,0,.6);    
`;

export const Date = styled.span`
    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 400;
    color: rgba(0,0,0,.6); 
    display: flex;
    align-items: center;

    span {
        margin: 0 2px;
    }

    svg {
        width: 16px;
        height: 16px;
    }
`;
