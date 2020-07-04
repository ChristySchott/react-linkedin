import styled from 'styled-components';

export const Container = styled.div`
    width: 250px;
    height: 50px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 4px 6px rgba(0,0,0,.2);
    transition: box-shadow 83ms;
    transition-timing-function: cubic-bezier(0,0,.2,1);
    transition-duration: 334ms;
    position: absolute;
    display: flex;
    justify-content: center;
    transform: translate(-10%,-100%);
    transform-origin: bottom left;
    transition: transform .5s,box-shadow .2s;
    border-radius: 300px;
    background-color: #fff;
    opacity: 1;
`;

export const List = styled.ul`
    display:flex;
    align-items: center;
`;

export const Item = styled.li`
    width: 46px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        height: 50px;
        width: 50px;
        transform: scale(0.7);
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: 167ms; 
        cursor: pointer;

        &:hover {
            transform: scale(1) translateY(-15px);
        }
    }
`;
