import styled from 'styled-components';

export const Container = styled.div`
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  cursor: pointer;
`;

export const Text = styled.a`
    font-family: Helvetica;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 16px;
    color: #434649;

    &:hover {
        text-decoration: underline;
    }

    &:hover strong {
        text-decoration: underline solid #0084bf;
    }

    strong {
        color: #0084bf;
    }
`;

export const Label = styled.span`
  margin-left: 10px;
  font-size: 1.2rem;
  color: rgba(0,0,0,0.55);
  line-height: 16px;
  min-width: 24px;
  vertical-align: bottom;
  display: flex;

  span {
      margin-right: 5px;
  }
`;
