import styled from 'styled-components';

export const Container = styled.div`
    height: 240px;
    padding: 24px;
    margin: 15px 0;

    div:nht-child(2) {
        box-shadow: 0 2px 3px rgba(0,0,0,.2);
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Text = styled.div``

export const Title = styled.h2`
    font-size: 1.8rem;
    line-height: 1.4;
    font-weight: 400;
    color: rgba(0,0,0,.9);
`

export const Followers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Number = styled.span`
    font-size: 1.3rem;
    line-height: 1.42857;
    font-weight: 400;
    color: rgba(0,0,0,.6);
`

export const Action = styled(Number)`
    margin-left: 10px; 
    color: #0073b1;
    cursor: pointer;
`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Label = styled(Action)`
`

