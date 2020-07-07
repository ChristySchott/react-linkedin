import styled from 'styled-components';

export const Container = styled.div`
  height: 32px;
  display: flex;
  width: 1128px;
  margin: 0 auto;
`;

export const People = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  width: 94px;
  height: 32px;
  justify-content: center;
  margin-right: 20px;
  font-weight: 600;

  &:hover {
    background-color: hsla(0,0%,81.2%,.25);
    color: rgba(0,0,0,.75);
  }

  span {
    margin-right: 4px;
    font-size: 1.5rem;
    line-height: 2rem;
    color: rgba(0,0,0,.6);
  }
`;

export const Icon = styled.div`
  width: 16px;
  height: 16px;
  margin: 0 -2px 0 4px;

  svg {
    width: 16px;
    height: 16px;
    color: rgba(0,0,0,.6);
  }
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 384px;
  height: 32px;
`;

export const Type = styled(People)`
  width: 64px;
  font-weight: 500;
  background-color: #0073b1;
  margin-right: 12px;

  &:hover {
    background-color: #006097;
    color: #fff;
  }

  span {
    color: #fff;
  }

  svg {
    color: #fff;
  }
`;

export const Local = styled(People)`
  width: 126px;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.6);
  margin-right: 12px;

  &:hover {
    background-color: hsla(0,0%,81.2%,.25);
    color: rgba(0,0,0,.75);
    box-shadow: inset 0 0 0 2px rgba(0,0,0,.75);
  }
`;

export const Companys = styled(Local)`
  width: 157px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const All = styled(People)`
  margin-right: 12px;
  width: 126px;
`;

export const Clean = styled(All)`
  margin: 0 0 0 8px;
  width: 92px;
`;
export const Actives = styled.span`
  color: #fff !important;
  min-width: 14px;
  font-size: 1.2rem !important;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  height: 18px;
  background-color: #0073b1;
  border: 2px solid #0073b1;
  border-radius: 14px;
  margin-left: 5px;
`;
