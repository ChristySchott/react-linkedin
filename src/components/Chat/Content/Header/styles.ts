import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Content = styled.div`
    position: relative;
    margin: 8px 12px;
`;

export const Search = styled.div`
    position: absolute;
    top: 8px;
    left: 10px;
    svg {
        width: 16px;
        height: 16px;
        color: rgba(0,0,0,.6);
    }
`;

export const Input = styled.input`
    width: 240px;
    height: 32px;
    padding: 0 28px 2px 32px;
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 400;
    border-radius: .2rem;
    border: .1rem solid rgba(0,0,0,.6);
    color: rgba(0,0,0,.9);
`;

export const Filter = styled.div`
    position: absolute;
    top: 8px;
    right: 10px;
    svg {
        width: 16px;
        height: 16px;
        color: rgba(0,0,0,.6);
    }
`;
