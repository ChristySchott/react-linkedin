import styled from 'styled-components';

export const Container = styled.div`
    height: 44px;
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-bottom: 1px solid #cdcfd2;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Title = styled.h1`
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 600;
    color: rgba(0,0,0,.9);
`;

export const Icons = styled.ul`
    display: flex;
    align-items: center;

    li:first-child {
      margin-right: 5px;
    }
`;

export const Icon = styled.li`
    a {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &:hover  {
        background-color: rgba(152,216,244,.25);
        svg {
          color: #006097;
        }
      }
    }
    svg {
        color: #0073b1;
        width: 24px;
        height: 24px;
    }
`;
