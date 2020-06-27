import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
`;

export const Title = styled.h5`
  padding: 8px 12px;
  text-transform: uppercase;
  border-top: 1px solid rgba(0,0,0,.15);
  border-bottom: 1px solid rgba(0,0,0,.15);
  background: #f3f6f8;
  font-size: 1.4rem;
  line-height: 1.42857;
  font-weight: 600;
  color: rgba(0,0,0,.9);
`;

export const Items = styled.ul`
li {
    padding: 10px 12px;
    cursor: pointer;
    font-size: 1.4rem;
    line-height: 1.42857;
    color: rgba(0,0,0,.6);

    &:hover {
        background-color: rgba(0,0,0,.1); 
    }
  }
`;
