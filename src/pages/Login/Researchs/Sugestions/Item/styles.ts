import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0,0,0,0.08);
  border-radius: 28px;
  padding: 8px 10px;
  height: auto;
  width: auto;

  margin: 0 6px 12px 0;

  &:hover {
    background-color: rgba(0,0,0, .2);
  }
`;

export const Text = styled.span`
    font-size: 2rem;
    line-height: 1.4;
    font-weight: 500;
    color: rgba(0,0,0,0.6);
`
