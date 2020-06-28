import styled from 'styled-components';

export const Container = styled.div`
    cursor: pointer;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, .6);

    &:hover {
        background-color: hsla(0,0%,81.2%,.25);
        color: rgba(0,0,0,.75);

        svg {
            color: rgba(0, 0, 0, .75);
        }
    }
    
    padding: 0 8px;

`;

export const Icon = styled.div`
    svg {
        color: rgba(0,0,0,.6);
        width: 24px;
        height: 24px;
        margin-right: 5px;
    }
`;

export const Text = styled.span`
    font-size: 1.4rem;
    line-height: 2.8rem;
    font-weight: 600;
`;
