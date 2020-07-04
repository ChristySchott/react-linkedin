import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 68px 24px 24px;
`;

export const User = styled.div`
    width: 488px;
    margin-right: 24px;
`

export const Name = styled.h2`
    font-size: 2.3rem;
    line-height: 1.33333;
    font-weight: 400;
    color: rgba(0,0,0,.9);
`

export const Job = styled.span`
    font-size: 1.7rem;
    line-height: 1.5;
    font-weight: 400;
    color: rgba(0,0,0,.9);
`

export const Box = styled.div`
    display: flex;
    align-items: center;
`

export const Place = styled(Job)`
    font-size: 1.6rem;
    margin: 0 5px 0 0;
    line-height: 1.7;
`

export const Connections = styled(Place)`
    color: #0073b1;
    font-weight: 500;
    margin: 0 0 0 5px;

    cursor: pointer;
`

export const Contact = styled(Connections)`
    margin:0;
`

export const Company = styled.div``

export const Item = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
`

export const Image = styled.div`
    width: 32px;
    height: 32px;
    overflow: hidden;
    border-radius: 3px;
     
    img {
        width: 100%;
    }

    margin-right: 8px;
`

export const NameCompany = styled(Contact)`
    font-size: 1.4rem;
    color: rgba(0,0,0,.9);
    line-height: 1.2;
`


