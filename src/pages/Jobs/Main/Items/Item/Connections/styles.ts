import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const List = styled.ul`
    display: flex;
    align-items: center;

    li:nth-of-type(2),
    li:nth-of-type(3) {
        margin-left: -10px;
    }
`

export const Item = styled.li`
    
`


export const BoxImages = styled.div``

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
        width: 22px;
        height: 22px;
    }
`

export const Text = styled.div`
    margin-left: 5px;
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
`
