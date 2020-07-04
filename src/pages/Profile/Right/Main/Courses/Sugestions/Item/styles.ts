import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    align-items: flex-start;
    width: 100%;    
    height: 60px;
    margin-top: 5px;
`;

export const Image = styled.div`
    width: 100px;
    height: 100px;
    position: relative;

    img {
        width: 100%;
    }
`

export const Circle = styled.div`
    position: absolute;
    top: 27%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 30px;
    height: 30px;
    line-height: 30px;
    background: rgba(0,0,0,.8);
    border-radius: 50%;
    border: 2px solid #fff;
    text-align: center;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: #fff;
    }
`

export const Infos = styled.div`
    width: 204px;
    margin-left: 7px;
`

export const Name = styled.span`
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 500;
    color: rgba(0,0,0,.9);
    max-width: 44px;

    span {
        color: rgba(0, 0, 0, .6);
        font-weight: 400;
    }
`

export const Job = styled.span`
    font-size: 1.3rem;
    line-height: 1.42857;
    font-weight: 400;
    color: rgba(0,0,0,.9);
    display: block;
`