import styled from 'styled-components';

interface Props {
    show?: boolean;
}

export const Container = styled.div`
    
`;

export const Content = styled.div`
    font-size: 1.3rem;
    line-height: 1.42857;
    font-weight: 400;
    color: rgba(0,0,0,.9);

    display: flex;
    justify-content: space-between;
`;

export const Button = styled.button<Props>`
    display: ${({ show }) => (show ? 'none' : 'block')};
    background: none;
    border: none;

    font-size: 1.3rem;
    line-height: 1.42857;
    font-weight: 400;
    color: rgba(0,0,0,.6);
`;

export const More = styled.div`
    font-size: 1.3rem;
    line-height: 1.42857;
    font-weight: 400;
    color: rgba(0,0,0,.9);
    margin-top: 10px;

    span {
        color: #0073b1;
    }
`;
