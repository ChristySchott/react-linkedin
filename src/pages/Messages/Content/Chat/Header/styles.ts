import styled from 'styled-components';

export const Container = styled.div`
  height: 44px;
  border-bottom: 1px solid #cdcfd2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const Infos = styled.div`
width: 100%:
`;

export const More = styled.button`
width: 32px;
height: 32px;

border: none;
display: flex;
align-items: center;
justify-content: center;

background: #ffffff;

svg {
  width: 16px;
  height: 16px;
  color: rgba(0,0,0,.6); 
}
`;

export const Name = styled.div`
  font-size: 1.4rem;
  line-height: 1.42857;
  font-weight: 600;
  color: rgba(0,0,0,.9);
  letter-spacing: 0.2px;
`;

export const Online = styled.div`
font-size: 1.14rem;
line-height: 1.33333;
font-weight: 400;
display: flex;
align-items: center;
`;

export const Status = styled.div`
  width: 8px;
  height: 8px;
  border-width: 2px;
  border: 2px solid #469a1f;
  border-radius: 50%;
  background: #fff;
  margin-right: 8px;
`;
