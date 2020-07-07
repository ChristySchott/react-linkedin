import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 0;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;
`;

export const Back = styled.button`
    width: 71.66px;
    display: flex;
    align-items: center;
    margin: 0 4px 0 0;
    padding: 2px 8px;
    background-color: transparent;
    color: rgba(0,0,0,.75);
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 500px;

    &:disabled {
        color: rgba(0,0,0,.25);
        cursor: not-allowed;

        svg {
            color: rgba(0,0,0,.25);
        }
    }

    svg {
        width: 16px;
        height: 16px;
        margin: 0 4px 0 -2px;
        color: rgba(0,0,0,.6);
    }
`;

export const Text = styled.span``;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Pages = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 627.81px;
    
    li:first-child {
        margin-left: 0 !important;

        button {
            color: #fff;
            background-color: #5c6f7c;
        }
    }
`;

export const Page = styled.li`
    width: 32px;
    height: 32px;
    margin-left: 4px;
`;
export const Number = styled.button`
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: rgba(0,0,0,.9);
    font-size: 1.4rem;
    line-height: 1.42;
    border-radius: 2px;
    border: 1px solid transparent; 
    background-color: transparent;

    &:hover {
        color: #fff;
        background-color: #5c6f7c;
    }
`;

export const Next = styled(Back)`
    width: 84.53px;
    margin: 0 0 0 4px;
    svg {
        margin: 0 -2px 0 4px;
    }
`;
