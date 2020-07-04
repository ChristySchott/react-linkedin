import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;    
    padding: 5px 40px 15px 35px;
`;

export const Border = styled.div`
    border-bottom: 1px solid #e6e9ec;
    padding-bottom: 10px;
`

export const Image = styled.div`
    width: 32px;
    height: 32px;
    position: relative;

    img {
        width: 100%;
        border: 4px solid transparent;
        height: 32px;
        border-radius: 50%;
    }
`

export const Infos = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 400;

    strong {
        font-weight: 500;
    }
`

export const Text = styled.div`
margin-left: 7px;
`

export const Box = styled.div`
    display: flex;
    align-items: center;
`

export const Place = styled.span`
    font-size: 1.4rem;
    margin: 0 5px 0 0;
    line-height: 1.7;
    font-weight: 400;
    color: rgba(0,0,0,.9);
`

export const Connections = styled(Place)`
    color: rgba(0,0,0,.6);
    font-weight: 400;
    margin: 0 0 0 5px;

    cursor: pointer;
`

