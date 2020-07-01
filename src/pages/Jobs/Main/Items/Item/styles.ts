import styled from 'styled-components';

export const Container = styled.div`
  width: 260px;
  height: 267px;

  padding: 12px 12px 12px 16px;
  cursor: pointer;
`;

export const Header = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export const Image = styled.div`
    width: 72px;
    height: 72px;

    img {
        width: 100%;
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const BoxRelation = styled.div`
    min-height: 50px;
    display: flex;
    align-items: center;
`

export const Icon = styled.button`
    width: 32px;
    height: 32px;
    background-color: transparent;
    color: rgba(0,0,0,.6);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 16px;
        height: 16px;
    }
`

export const Infos = styled.div`
    min-height: 90px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h2`
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.5;
    color: rgba(0,0,0,.9);
    max-width: 212px;
`

export const Company = styled.span`
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.42857;
`

export const Place = styled(Company)``

export const Relation = styled.div``

export const RelationImage = styled.div``

export const RelationText = styled.span``

export const Footer = styled.div`
    position: relative;
    display: flex;

    &::before {
        position: absolute;
        content: "";
        width: 28px;
        height: 0;
        border-top: 1px solid #cdcfd2;
        top: -5px;
    }
`

export const Date = styled(Company)`
    font-size: 1.2rem;
`

export const Candidates = styled(Date)`
    color: #2f7b15;
`

export const Linkedin = styled(Date)`
    display: flex;
    align-items: center;

    svg {
        width: 14px;
        height: 14px;
        margin-right: 2px;
    }
`;

export const Mid = styled.div`
    margin: 0 3px;
`


export const Promoted = styled(Date)`

`;

