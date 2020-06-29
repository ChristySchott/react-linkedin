import styled from 'styled-components';

export const Container = styled.div`
    width: 182px;
    height: 100px;
    background: #ffffff;
    border-radius: 4px;
    top: 662px;
    right: 142px;
    display: flex;
    justify-content: center;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Item = styled.li`
    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 600;
    color: rgba(0,0,0,.6);
    padding: 2.5px 10px;
    cursor: pointer;
    width: 100%;
    text-align: initial;
    height: 22px;

    a {
        color: rgba(0,0,0,.6);
    }

    &:hover{
        background: #e6e6ff;
    }
  `;
