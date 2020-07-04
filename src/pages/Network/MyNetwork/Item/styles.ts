import styled from 'styled-components';

export const Container = styled.li`
  font-size: 1.2rem;
  line-height: 1.33333;
  font-weight: 600;
  color: rgba(0,0,0,.6);
  padding: 2.5px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover{
      background: #e6e6ff;
  }

  span {
      margin-left: 5px;
  }

  span:hover{
      color: #0084bf;
      text-decoration: underline solid #0084bf;
  }
`;

export const Name = styled.div`
    display: flex;
    align-items: center;
`

export const Icon = styled.div`
    margin-right: 15px;
    svg {
        width: 24px
        height: 24px;
        color: rgba(0,0,0,.9);
    }
`

export const Text = styled.h2`
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    color: rgba(0,0,0,.9);
`

export const Number = styled(Text)``
