import styled from 'styled-components';

export const Container = styled.div`
  width: 504px;
  height: 334px;
  padding-top: 15px;
`;

export const Image = styled.div`
  width: 24px;
  height: 24px;

  svg {
    width: 24px;
    height: 24px;
    color: rgba(0,0,0,.6);
    }
`;

export const Text = styled.div`
  width: 464px;
`;

export const Name = styled.h3`
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 600;
  color: rgba(0,0,0,.9);
`;

export const Sub = styled.span`
font-size: 1.4rem;
line-height: 1.6;
font-weight: 400;
color: rgba(0,0,0,.9);
display: flex;
align-items: center;

 a {
    color: #0073b1;
    a:hover {
    text-decoration: underline;
    color: #006097;
    }
 }
`;

export const Info = styled(Sub)`
  color: rgba(0,0,0,.6);
  margin-left: 5px;
`;

export const Template = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
`;
