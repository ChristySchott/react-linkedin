import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;    
    height: 72px;
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
    width: 307px;
    margin-left: 7px;
`

export const Name = styled.span`
    font-size: 1.3rem;
    line-height: 1.6;
    font-weight: 500;
    color: rgba(0,0,0,.9);
    max-width: 281px;
    display: flex;
    span {
        color: rgba(0, 0, 0, .6);
        font-weight: 400;
    }
`

export const Comment = styled.span`
    font-size: 1.3rem;
    line-height: 2;
    font-weight: 400;
    color: rgba(0,0,0,.9);
    display: block;
`