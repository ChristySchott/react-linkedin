import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Footer = styled.a`
    margin-top: 10px;
    height: 40px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 500;
    color: rgba(0,0,0,.9);
    border-top: 1px #cfcfcf solid;

    &:hover {
        cursor: pointer;
        background: #e6e6ff;
        color: #0084bf;
        text-decoration: underline solid #0084bf;
    }
`;
