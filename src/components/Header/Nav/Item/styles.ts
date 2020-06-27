import styled from 'styled-components';

export const Container = styled.li`
    position: relative;
    &:hover {
        a {
            color: #ffffff;
        }
    }
    
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80px;
        height: 44px;
        position: relative;
        text-decoration: none;
        color: #c7d1d8;;
    
    &:hover {
        svg {
        fill: #ffffff;
        }
    }
`;

export const Icon = styled.span`

svg {
    width: 24px; 
    height: 24px;
    fill: #283e4a;
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

   span {
       margin-right: 2px;
   }
`;

export const Notification = styled.span`
    position: absolute;
    top: -4px;
    left: 50%;
    height: 16px;
    width: 16px;
    line-height: 14px;
    background-color: #d11124;
    border: 2px solid #283e4a;
    border-radius: 50px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;
