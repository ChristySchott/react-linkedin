import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Header = styled.div`
    height: 57px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
    background-color: #fff;
    border-radius: 2px;
    position: absolute;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
`;

export const Content = styled.div`
    padding-top: 50px;
`;

export const Core = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const Main = styled.div`
    width: 792px;
`;

export const Right = styled.aside`
    width: 312px;
    margin-left: 24px;

    img {
        border: 6px solid #fff;
        box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
    }
`;
