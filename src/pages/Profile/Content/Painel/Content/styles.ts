import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;

  div:nth-child(2),
  div:nth-child(3) {
    border-left: 1px solid rgba(0,0,0,.25);
  }
`;

export const Card = styled.div`
    width: 248px;
    height: 108px;
    padding: 8px 12px 12px;
`

export const Views = styled.h1`
    color: #0073b1;
    display: block!important;
    font-size: 3.2rem;
    line-height: 1.25;
    font-weight: 200;
`

export const Text = styled.span`
    font-size: 1.3rem;
    line-height: 1.6;
    font-weight: 400;
    color: rgba(0,0,0,.9);
`
