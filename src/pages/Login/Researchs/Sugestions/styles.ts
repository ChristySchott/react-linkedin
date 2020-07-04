import styled from 'styled-components';

export const Container = styled.div`
    width: 648px;
    height: 283px;
`;

export const Title = styled.div`
    margin-bottom: 20px;    
`

export const Text = styled.h2`
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 500;
    color: rgba(0,0,0,0.6);
    text-transform: uppercase;
    line-height: 20px;
`

export const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const More = styled.div`
    display: flex;
    align-items: center;

    color: rgba(0,0,0,0.6);
    margin-top: 15px;
    cursor: pointer;
`

export const TextMore = styled.span`
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 500;
`

export const IconMore = styled.div`
    transform: rotate(180deg);
    margin-left: 10px;
    margin-top: -5px;

    svg {
        width: 15px;
        height: 15px;
    }
`



