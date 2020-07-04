import styled from 'styled-components';

export const Container = styled.div`
  
`;
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    padding-bottom: 20px;
`;

export const Title = styled.h2`
    font-size: 1.8rem;
    line-height: 1.4;
    font-weight: 400;
    color: rgba(0,0,0,.9);
    display: flex;
    align-items: center;
    margin-left: 15px;
`;

export const Icon = styled.button`
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 40px;
    height: 40px;
    svg {
        color: #0073b1;
        width: 24px;
        height: 24px;
    }

    &:hover {
        background-color: rgba(152,216,244,.25);
        color: #006097;
    }

    margin-left: 8px;
`

export const Content = styled.ul``
