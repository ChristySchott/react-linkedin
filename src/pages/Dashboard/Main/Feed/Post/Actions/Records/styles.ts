import styled from 'styled-components';

export const Container = styled.div`
    height: 34px;
    padding: 8px;
    border-bottom: 1px solid #e6e9ec;
`;

export const List = styled.ul`
    display: flex;
    align-items: center;

    li:first-child {
        span {
            margin-left: 3px;
        }
    }
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    margin-right: 5px;

    img {
        margin-right: 2px;
    }

    span {
        font-size: 1.2rem;
        line-height: 1.33333;
        font-weight: 400;
        color: rgba(0,0,0,.6);
        cursor: pointer;
    }

    &:hover {
        span {
            color: #0073b1;
            text-decoration: underline solid #0073b1;
        }
    }
`;
