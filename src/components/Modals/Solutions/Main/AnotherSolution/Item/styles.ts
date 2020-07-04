import styled from 'styled-components';

export const Container = styled.div`
  width: 70px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 15px;

`;

export const Box = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0,0,0,.15);
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.span`
  font-size: 1.2rem;
  line-height: 1.33333;
  font-weight: 400;
  color: rgba(0,0,0,.6);
  word-wrap: break-word!important;
  word-break: break-word!important;
`;
