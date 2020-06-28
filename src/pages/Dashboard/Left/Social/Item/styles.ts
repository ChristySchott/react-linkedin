import styled from 'styled-components';

const Container = styled.li`
  font-size: 1.2rem;
  line-height: 1.33333;
  font-weight: 600;
  color: rgba(0,0,0,.6);
  padding: 2.5px 10px;
  cursor: pointer;

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

export default Container;
