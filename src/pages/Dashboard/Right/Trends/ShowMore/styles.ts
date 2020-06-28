import styled from 'styled-components';

interface Props {
    reverse: boolean;
}

const Container = styled.div<Props>`
  div {
      display: flex;
      flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};

      li:first-child {
          margin-top: 10px;
      }
  }
`;

export default Container;
