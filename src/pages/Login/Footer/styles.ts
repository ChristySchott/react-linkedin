import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 240px;
`;

export const Content = styled.div`
    width: 1228px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

export const Logo = styled.div`
    svg {
        width: 84px;
        height: 21px;
    }
`

export const Lists = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 1044px;
    padding-left: 16px;
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;

    font-size: 1.4rem;
    line-height: 2.4;
    font-weight: 500;
    color: #666666;
    
    &:hover {
        color: #006097;
        text-decoration: underline;
    }
`