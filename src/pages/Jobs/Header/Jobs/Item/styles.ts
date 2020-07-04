import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  width: 176px;
  padding: 0 16px;
`;

export const Icon = styled.div`
    svg {
        width: 24px;
        height: 24px;
        color: rgba(0,0,0,.6);
    }

    margin-right: 5px;
    cursor: pointer;
`;

export const Text = styled.span`
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 600;
    color: rgba(0,0,0,.6);
    cursor: pointer;

    &:hover {
        text-decoration: underline solid #006097;
    }
`;
