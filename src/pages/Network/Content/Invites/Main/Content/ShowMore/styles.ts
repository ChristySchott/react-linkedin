import styled from 'styled-components';

interface Props {
    reverse: boolean;
}

export const Container = styled.div<Props>`

  .Collapsible {
      display: flex;
      flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  }

  li:first-child {
    background: #ffffff
  }
`;

export const Box = styled.section`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;


