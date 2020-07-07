import styled from 'styled-components';

interface Props {
    active: number;
}

export const Container = styled.div`
  width: 552px;
`;

export const Header = styled.div`
  height: 61px;
  border-bottom: 1px solid rgba(0,0,0,.15);
  z-index: 10;
  display: flex;
  align-items: center;
  padding: 16px 24px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  justify-content: space-between;
  width: 100%;
`;

export const Text = styled.h2`
  font-size: 1.8rem;
  line-height: 1.4;
  color: rgba(0,0,0,.9);
  font-weight: 400;
  font-style: normal;
  margin-bottom: 0;
  padding-right: 1.6rem;
`;

export const Icon = styled.button`
  height: 2.4rem;
  width: 2.4rem;
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    color: rgba(0,0,0,.6);
  }
`;

export const Nav = styled.nav``;

export const Pages = styled.ul<Props>`
  margin-top: 3px;
  display: flex;

  li:nth-child(${({ active }) => active}) {
    color: #0073b1;

    &:after{
        content: "";
        height: 4px;
        width: 100%;
        background-color: #0084bf;
        transition: all .2s ease;
        position: absolute;
        left: 0;
        bottom: 0;
    }
  }
`;

export const Category = styled.li`
  font-size: 1.4rem;
  line-height: 1.42857;
  font-weight: 500;
  cursor: pointer;
  color: rgba(0,0,0,.6);
  height: 43px;
  padding: 12px;
  position: relative;

  &:hover {
      color: #0073b1;
  }

`;

export const Content = styled.div`
  padding: 16px 24px;
`;

export const Cover = styled.div`
  height: 186px;
  width: 552px;
  img {
    width: 552px;
  }

  position: relative;
`;

export const IconEdit = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  &:hover {
    background-color: rgba(152,216,244,.25);
    color: #006097;
  }

  svg {
    color: #0073b1;
    width: 24px;
    height: 24px;
  }

`;

export const Infos = styled.div`
  width: 552px;
`;

export const Photo = styled.button`
  width: 152px;
  height: 152px;
  border-radius: 50%;
  background-color: #e6e9ec;
  box-shadow: inset 0 1.5px 3px 0 rgba(0,0,0,.15), 0 1.5px 3px 0 rgba(0,0,0,.15);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 3px solid #fff;
  transform: translate(20px, -95px);

  img {
    width: 152px;
    height: 152px;
  }
`;
