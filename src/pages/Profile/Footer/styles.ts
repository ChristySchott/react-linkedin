import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  border-top: 1px solid rgba(205,207,210,.7);
`;

export const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Logo = styled.div`
    padding: 15px 0 15px 0;
    svg {
        width: 84px;
        height: 21px;
    }
`;

export const List = styled.div``;

export const Action = styled.div``;

export const Copyright = styled.div`
    padding: 10px 0 15px 0;
    p {
        font-size: 1.2rem;
        line-height: 1.33333;
        font-weight: 400;
        color: rgba(0,0,0,.6);
    }
`;
