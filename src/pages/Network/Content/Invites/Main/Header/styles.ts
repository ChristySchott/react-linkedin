import styled from 'styled-components';

export const Container = styled.div`
    height: 49px;
    border-bottom: 1px solid rgba(0,0,0,.15);
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 15px;
    background-color: #e6f7ff;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Invites = styled.h2`
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    color: rgba(0,0,0,.9);
`

export const Show = styled(Invites)`
    font-weight: 500;
    color: #0073b1;
    cursor: pointer;
`

export const BoxShow = styled.a`
    height: 32px;
    width: 170px;
    padding: 6px 8px;
    margin-top: -6px;
`

export const List = styled.ul`
    display: flex;
    align-items: center;

    li:nth-of-type(2),
    li:nth-of-type(3) {
        margin-left: -15px;
    }
`

export const Item = styled.li`
    
`


export const BoxImages = styled.div`
    display: flex;
    align-items: center;
`

export const Border = styled.div`
    list-style-type: none;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(255, 255, 255);
    border-image: initial;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
        width: 28px;
        height: 28px;
    }
`

export const WrapperImages = styled.div`
    height: 49px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 5px;
`;

export const Text = styled.div`
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-size: 1.2rem;
        color: rgba(0, 0, 0, 0.6);
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.42857;
    }

    strong {
        font-size: 1.2rem;
        color: rgba(0, 0, 0, 0.9);
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1.42857;
        margin-right: 4px;
    }
`


