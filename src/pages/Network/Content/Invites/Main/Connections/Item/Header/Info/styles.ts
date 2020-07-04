import styled from 'styled-components';

interface Props {
  padding: boolean;
}

export const Container = styled.div<Props>`
  padding-top: ${({ padding }) => (padding ? '45px' : '60px')};
  width: 180px;
  margin: 0 auto;
  margin-top: 20px;
`;

export const BoxName = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.h4`
    font-size: 1.5rem;
    line-height: 1.4;
    font-weight: 600;
    color: rgba(0,0,0,.9);
`;

export const BoxJob = styled.div`
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Job = styled.span`
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 400;
    color: rgba(0,0,0,.6);
`;
