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

export const Private = styled.span`
    line-height: 1.75;
    font-size: 1.6rem;
    font-style: italic;
    font-weight: 400;
    color: rgba(0,0,0,.6);
`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Svg = styled.div`
    margin-right: 3px;
    svg {
        width: 24px;
        height: 24px;
        color: rgba(0,0,0,.6);
    }
`

export const Label = styled.span`
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 600;
    color: rgba(0,0,0,.6);
`

export const Line = styled.div`
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
    margin: 15px 0;
`

