import styled from 'styled-components';

interface Props {
    color: string;
}

export const Container = styled.div`
  width: 262px;
  margin: 8px;
  height: 370px;
  padding: 0 0 24px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15);
  background-color: #fff;
  border-radius: 2px;
`;

export const Header = styled.div<Props>`
  height: 101px;
  padding: 16px 0;
  background: ${({ color }) => color};
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  line-height: 1.33333;
  color: #fff;
  font-weight: 400;
`;

export const Sub = styled.span`
  font-size: 1.4rem;
  line-height: 1.42857;
  color: #fff;
  font-weight: 400;
`;

export const Main = styled.ul`
    height: 170px;
    padding: 16px 32px;
    list-style: inherit;
`;

export const Item = styled.li`
    margin-bottom: 8px;
    font-size: 1.4rem;
    line-height: 1.42857;
    color: rgba(0,0,0,.6);
`;

export const Button = styled.button`
    margin: 35px 24px 0;
    width: 214px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    min-height: 4rem;
    padding: 1rem 1.6rem;
    line-height: 2rem;
    background-color: transparent;
    color: #0073b1;
    box-shadow: inset 0 0 0 1px #0073b1;

    &:hover {
        background-color: rgba(152,216,244,.25);
        color: #006097;
        box-shadow: inset 0 0 0 2px #006097;
    }
`;
