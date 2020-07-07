import styled from 'styled-components';

export const Container = styled.div`
  height: 92px;
  padding: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Text = styled.div``;

export const Title = styled.h3`
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 500;
    color: rgba(0,0,0,.9);
`;

export const Sub = styled.span`
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 400;
    color: rgba(0,0,0,.6);
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    width: 95px;
    height: 43px;

    button:last-child {
        margin-left: 12px;
    }
`;
export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
    background: transparent;
    border-radius: 50%;
    color: #0073b1;
    box-shadow: inset 0 0 0 1px #0073b1;

    &:hover {
        background-color: rgba(152,216,244,.25);
        color: #006097;
        box-shadow: inset 0 0 0 2px #006097;
    }

    svg {
        width: 24px;
        height: 24px;
    }
`;
