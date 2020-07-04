import styled from 'styled-components';

export const Container = styled.div`
    background-color: #f3f6f8;
    border-top: 1px solid rgba(0,0,0,.15);
    padding: 12px 16px;
    border-radius: 0 0 2px 2px;
   
`;

export const Text = styled.span`
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 400;
    color: rgba(0,0,0,.6);

    a {
        color: #0084bf;
        margin-right: 4px;
        
        &:hover {
            text-decoration: underline solid #0084bf;
        }
    }
`;
