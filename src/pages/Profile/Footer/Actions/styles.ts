import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  aling-items: flex-start;
  justify-content: space-between;
`;

export const ContainerCard = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;    
    height: 72px;
`;

export const Image = styled.div`
    width: 24px;
    height: 24px;
    position: relative;

    svg {
        width: 24px;
        height: 24pxpx;
        color: #0073b1;
    }
`;

export const Infos = styled.div`
    margin-left: 10px;
    margin-top: 4px;
`;

export const Name = styled.span`
    font-size: 1.4rem;
    line-height: 1.4;
    font-weight: 500;
    color: rgba(0,0,0,.6);
    max-width: 281px;
    display: flex;
    span {
        color: rgba(0, 0, 0, .6);
        font-weight: 400;
    }

    &:hover {
        color: #0073b1;
    }
    cursor: pointer;

`;

export const NameBlue = styled(Name)`
    color: #0073b1;
`;

export const Followers = styled.span`
    font-size: 1.3rem;
    line-height: 1.7;
    font-weight: 400;
    color: rgba(0,0,0,.6);
    display: block;
`;

export const Cards = styled.div`
    width: 282px;
`;

export const Card = styled.div`
    height: 36px;
    margin-bottom: 16px;
`;

export const Language = styled.div`
`;

export const Label = styled.label`
    color: #5c6f7c;
    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 400;
`;

export const BoxInput = styled.div`
    position: relative;
    width: 282px;
`;

export const Input = styled.input`
    width: 282px;
    height: 32px;
    color: #0073b1;
    border: 2px solid #0073b1;
    border-radius: 2px;
    padding: 0 32px 0 8px;
    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 600;

    ::-webkit-input-placeholder {
        color: #0073b1;
     }
`;

export const Icon = styled.div`
    position: absolute;
    right: 10px;
    bottom: 8px;
    width: 16px;
    height: 16px;

    svg {
        width: 16px;
        height: 16px;
        color: rgba(0,0,0,.6);
    }
`;
