import styled from 'styled-components';

export const Container = styled.div`
  min-width: 150px;
  height: 282px;
  cursor: pointer;
  overflow: hidden;
`;

export const Content = styled.div`
    width: 100%;
`

export const Text = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2.5px;
`

export const Name = styled.span`
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 500;
    color: rgba(0,0,0,.9);
`

export const New = styled.span`
    font-size: 1.2rem;
    line-height: 1.33333;
    color: #2f7b15;
    font-weight: 600;
    margin-left: 4px;
`

export const Alert = styled.span`
    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 400;
    color: rgba(0,0,0,.6);
`
