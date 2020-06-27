import styled from 'styled-components';

export const Container = styled.li`
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
