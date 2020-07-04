import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    align-items: flex-start;
    width: 100%;    
    height: 87px;
    margin-top: 12px;
`;

export const Image = styled.div`
    width: 56px;
    height: 56px;

    img {
        width: 56px;
        border-radius: 50%;
    }
`;

export const Infos = styled.div`
    width: 160px;
`;

export const Border = styled.div`
    display: flex;
    border-bottom: 1px solid #cfcfcf;
    padding: 3px 0 5px 8px;
`;

export const Name = styled.span`
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 500;
    color: rgba(0,0,0,.9);
    max-width: 44px;

    span {
        color: rgba(0, 0, 0, .6);
        font-weight: 400;
    }
`;

export const Job = styled.span`
    font-size: 1.3rem;
    line-height: 1.42857;
    font-weight: 400;
    color: rgba(0,0,0,.9);
    display: block;
`;

export const Icon = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    background: transparent;
    margin-left: 16px;

    &:hover {
        background-color: hsla(0,0%,81.2%,.25);
        svg {
            color: rgba(0,0,0,.75);
        }
    }

    svg {
        width: 24px;
        height: 24px;
        color: rgba(0, 0, 0, .6);
    }
`;
