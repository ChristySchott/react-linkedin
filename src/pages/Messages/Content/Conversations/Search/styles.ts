import styled from 'styled-components';

export const Container = styled.div`
    height: 43px;
    border-bottom: 1px solid #cdcfd2;
    position: relative;

    svg {
      width: 16px;
      height: 16px;
    }
`;

export const Input = styled.input`
    height: 100%;
    width: 100%;
    padding-left: 40px;
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 400;
    color: rgba(0,0,0,.6);

    border: none;

    &:focus {
      border: none;
      outline: none;
    }
`;

export const BoxSearch = styled.div`
    position: absolute;
    left: 10px;
    bottom: 10px;
`;

export const BoxFilter = styled.div`
    position: absolute;
    right: 10px;
    bottom: 5px;

    a {
      height: 32px;
      width: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &:hover  {
        background-color: hsla(0,0%,81.2%,.25);
        svg {
          color: rgba(0,0,0,.75);
        }
      }
    }
`;
