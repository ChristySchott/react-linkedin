import styled from 'styled-components';

export const Container = styled.div`
    height: 112px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 184px;
    height: 80px;
    margin: auto;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h3`
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 600;
    color: rgba(0,0,0,.9);
    text-align: center;
`;

export const Text = styled(Title)`
    font-weight: 400;
    color: rgba(0, 0, 0, .6);
`;
