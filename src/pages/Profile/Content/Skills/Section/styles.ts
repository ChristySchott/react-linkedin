import styled from 'styled-components';

export const Container = styled.div`
  
`;
export const Header = styled.div`
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

export const Actions = styled.div`
    display: flex;
    align-items: center;
`

export const Add = styled.button`
    margin-right: 10px;
    width: 223px;
    height: 32px;
    background-color: transparent;
    color: rgba(0,0,0,.6);
    border: none;
    border-radius: 2px;

    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgba(0,0,0,.6);
        color: #fff;
    }


`

export const Test = styled(Add)`
    background-color: transparent;
    color: #0073b1;
    box-shadow: inset 0 0 0 1px #0073b1; 
    margin: 10px 0 0 15px;
`

export const Infos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`