import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const Divider = styled.div`
    width: 392px;
    height: 1px;
    border-color: rgba(0,0,0,.15);
    border-top: 1px solid rgba(0,0,0,.15);
`;

export const Text = styled.div`
    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 400;
    color: rgba(0,0,0,.6);
    display: flex;
    align-items: center;
    
    strong {
        margin: 0 3px;
        color: rgba(0, 0, 0, .9);
    }

    svg {
        width: 16px;
        height: 16px;
    }
`;
