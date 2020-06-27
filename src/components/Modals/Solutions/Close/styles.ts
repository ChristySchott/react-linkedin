import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 65px;
  height: 50px;
  width: 380px;
  right: 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
      border: none;
      background: none;

      &:active, &:focus {
          outline: none;
      }
  }
`;
