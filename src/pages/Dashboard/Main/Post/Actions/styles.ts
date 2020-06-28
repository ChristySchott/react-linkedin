import styled from 'styled-components';

export const Container = styled.div`
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Items = styled.div`
    display: flex;

    button:first-child {
        width: 334px;
        justify-content: flex-start;

        &:hover {
            background: #ffffff;
    
            svg {
                color: #0084bf;
            }

            span {
                color: #0084bf;
                text-decoration: underline solid #0084bf;
            }
        }
    }
`;

export const NewPost = styled.div`
    display: flex;
    align-items: center;
`;

export const Text = styled.span`
    display: flex;
    margin: 2px 0 0 8px;
    font-size: 1.55rem;
    line-height: 1.5;
    font-weight: 600;
`;
