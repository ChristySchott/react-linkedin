import styled from 'styled-components';

export const Container = styled.li`
    color: #c7d1d8;
    
    &:hover {
        color: #ffffff;
    }
`;

export const Content = styled.a`
display: flex;
flex-direction: column;
align-items: center;
width: 80px;
height: 44px;
position: relative;

&:hover {
    svg {
    fill: #ffffff;
    }

    &::after {
        display: block;
        content: "";
        position: absolute;
        width: 100%;
        left: 0;
        bottom: -4px;
        border-bottom: 2px solid #fff;
    }
}




`;

export const Icon = styled.span`

svg {
    width: 24px; 
    height: 24px;
    fill: #c7d1d8;
}`;

export const Text = styled.span`
font-size: 1.2rem;
line-height: 1.33333;
display: block;
font-weight: 400;
line-height: 1.6rem;
transition: color .3s;

display: flex;
align-items: center;

&:first-child {
    margin-right: 10px;
}
`;
