import styled from 'styled-components';

export const Container = styled.div`
    height: 49px;
    border-bottom: 1px solid rgba(0,0,0,.15);
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 15px;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Invites = styled.h2`
font-size: 1.6rem;
line-height: 1.5;
font-weight: 400;
color: rgba(0,0,0,.9);
`

export const Show = styled(Invites)`
    font-weight: 500;
    color: rgba(0,0,0,.6);
    cursor: pointer;
`

export const BoxShow = styled.a`
    height: 32px;
    width: 170px;
    padding: 6px 8px;

    &:hover {
        background-color: rgba(0,0,0, .025);
    }
`

