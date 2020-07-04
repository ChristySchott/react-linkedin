import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 56px;
  height: 50px;
  width: 380px;
  right: 0;
  background-color: #f3f6f8;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;

  button {
      border: none;
      background: none;

      &:active, &:focus {
          outline: none;
      }
  }
`;
