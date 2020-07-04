import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const List = styled.ul``

export const Item = styled.li`
    display: flex;
    align-items: center;
    height: 24px;
    margin-bottom: 4px;
    width: 187px;

    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 500;
    color: rgba(0,0,0,.6);

    cursor: pointer;

    &:hover {
        color: #0073b1;
    }
`

export const Icon = styled.div`
    margin-left: 12px;
    svg {
        width: 12.8px;
        height: 12.8px;
    }
`

