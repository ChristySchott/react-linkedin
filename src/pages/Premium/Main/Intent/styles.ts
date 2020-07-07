import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 530px;
  height: 344px;

  margin: 0 auto;
  margin-top: 45px;
`;

export const Content = styled.div`
    width: 530px;
    height: 344px;
    display: flex;
    padding: 24px;
`;

export const Header = styled.div``;

export const Image = styled.div`
    width: 48px;
    height: 48px;

    img {
        width: 100%;
        border-radius: 50%;
    }
`;

export const Text = styled.div``;

export const Title = styled.h3`
    font-size: 2rem;
    line-height: 1.4;
    font-weight: 400;
    color: rgba(0,0,0,.9);
`;

export const Sub = styled.span`
    font-size: 1.4rem;
    line-height: 1.42857;
    color: rgba(0,0,0,.6);
    font-weight: 400;
`;

export const Main = styled.div`
    width: 418px;
    height: 295px;
    margin-left: 20px;
`;

export const Item = styled.div`
    display: flex;
    margin-top: 22px;
`;

export const Input = styled.input`
    width: 22px;
    height: 22px;
`;

export const Label = styled.label`
    font-size: 1.4rem;
    line-height: 1.6;
    font-weight: 400;
    color: rgba(0,0,0,.9);
    margin-left: 10px;
`;
