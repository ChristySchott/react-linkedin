import styled from 'styled-components';

interface Props {
    reverse: boolean;
}

export const Container = styled.div`
    max-width: 312px;
    width: 312px;
`;

export const Items = styled.ul`
    display: flex;
    align-items: center;
    margin: 10px auto;
    margin-bottom: 20px;
    line-height: 24px;
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Item = styled.li`
    margin-left: 24px;
    margin-top: 8px;
    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 400;

    &:first-child {
        margin-left: 0;
    }

    a {
        display: flex;
        align-items: center;
        color: #485d69;
        span {
            margin-left: 5px;

            svg {
                width: 12.8px;
                height: 12.8px;
            }
        }
    }

    &:hover a {
        color: #0073b1;
    }
`;
