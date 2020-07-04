import styled from 'styled-components';

export const Container = styled.li`
    padding-left: 12px;
    margin-top: 12px;
    cursor: pointer;

    &:nth-of-type(1) {
        margin-top: 0;
    }

    &:hover {
        background-color: rgba(0,0,0,.1); 
    }

    &:hover div span span:nth-of-type(2) {
        color: #0084bf;
        text-decoration: underline solid #0084bf;
    }
`;

export const BoxTitle = styled.div`
  
`;

export const Title = styled.span`
  span:last-child {
    margin-left: 8px;
    font-size: 1.3rem;
    line-height: 1.42857;
    font-weight: 500;
    color: rgba(0, 0, 0 ,.9);
  }
`;

export const Icon = styled.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 4px solid #33aada;
    display: inline-block;
`;

export const BoxInfos = styled.div`
    margin-top: 2px;
`;

export const Infos = styled.span`
    font-size: 1.2rem;
    line-height: 1.33333;
    font-weight: 400;
    color: rgba(0,0,0,.6);
    padding-left: 17px;

    span {
        margin 0 3px;
    }
`;
