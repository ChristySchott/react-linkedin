import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100px;
  min-height: 100px;
  width: 100%;
  border-top: 1px solid #cdcfd2;
  border-bottom: 1px solid #cdcfd2;
`;

export const Content = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const Input = styled.input`
    border: none;
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 400;
    color: rgba(0,0,0,.9);
    padding: 10px;
`;

export const Icon = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 24px;
      height: 24px;
      color: rgba(0, 0, 0, .6);
    }
`;
