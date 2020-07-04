import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;    
    padding: 0 20px 30px 35px;
`;

export const Image = styled.div`
    width: 55px;
    height: 55px;
    position: relative;

    img {
        width: 100%;
        border: 4px solid transparent;
        height: 56px;
    }
`

export const Infos = styled.div`
    margin-left: 7px;
`

export const Name = styled.span`
    font-size: 1.5rem;
    line-height: 1.4;
    font-weight: 500;
    color: rgba(0,0,0,.9);
    max-width: 600px;
    display: flex;
    span {
        color: rgba(0, 0, 0, .6);
        font-weight: 400;
    }
`

export const Company = styled.span`
    font-size: 1.4rem;
    line-height: 1.4;
    font-weight: 400;
    color: rgba(0,0,0,.9);
    display: block;
`

export const Date = styled(Company)`
    font-size: 1.3rem;
    color: rgba(0,0,0,.6);
    line-height: 1;
`

export const Certificate = styled(Date)`
    color: rgba(0,0,0,.9);
`


