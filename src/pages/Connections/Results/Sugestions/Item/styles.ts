import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;    
    height: 123px;
`;

export const Image = styled.div`
    width: 72px;
    height: 56px;
    margin: 16px 0px 16px 24px;
    padding-right: 16px;

    img {
        width: 56px;
        border-radius: 50%;
    }
`;

export const Infos = styled.div`
    width: 495.86px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px 0 16px;
`;

export const Border = styled.div`
    display: flex;
    border-bottom: 1px solid #cfcfcf;
`;

export const Name = styled.span`
    font-size: 1.6rem;
    line-height: 1.4;
    font-weight: 500;
    color: #0073b1;

    span {
        color: rgba(0, 0, 0, .6);
        font-weight: 400;
    }
`;

export const Job = styled.span`
    font-size: 1.4rem;
    line-height: 1.3;
    font-weight: 400;
    color: rgba(0,0,0,.9);
    display: block;
`;

export const Place = styled(Job)`
    font-size: 1.2rem;
    line-height: 1.1;
    font-weight: 400;
    color: rgba(0,0,0,.6);
`;

export const Connections = styled.div`
    display: flex;
    align-items: center;
    height: 32px;
    margin-top: 5px;
`;

export const Icon = styled.div`
    margin-right: 7px;
    svg {
        width: 16px;
        height: 16px;
        color: rgba(0,0,0,.6);
    }
`;

export const Who = styled(Place)``;

export const WrapperButton = styled.div`
    width: 200px;
    height: 123px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 24px;

`;

export const Button = styled.button`
    width: 152px;
    height: 32px;
    background-color: transparent;
    color: #0073b1;
    box-shadow: inset 0 0 0 1px #0073b1;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    line-height: 2rem;

    &:hover {
        background-color: rgba(152,216,244,.25);
        color: #006097;
        box-shadow: inset 0 0 0 2px #006097;
    }
`;
