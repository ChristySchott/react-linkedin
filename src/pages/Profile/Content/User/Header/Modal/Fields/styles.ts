import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 24px 8px 24px;
    margin: -70px 0 15px;
    width: 744px;
`;

export const First = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 696px;
`;

export const Name = styled.div`
    width: 344px;
`;

export const Surname = styled(Name)``;

export const Template = styled.div`
    height: 55px;
    margin-top: 24px;
    width: 696px;
`;

export const Label = styled.label`
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.42857;
    color: rgba(0,0,0,.9);
    margin-bottom: 4px;
`;

export const Input = styled.input`
    width: 100%;
    height: 32px;
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 400;
    padding: 0 10px;
    border-radius: .2rem;
    border: .1rem solid rgba(0,0,0,.6);
    color: rgba(0,0,0,.9);
`;

export const Select = styled.select`
    width: 100%;
    height: 32px;
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 400;
    padding: 0 3.2rem 0 .8rem;
    border-radius: .2rem;
    border: .1rem solid rgba(0,0,0,.6);
    color: rgba(0,0,0,.6);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    z-index: 2;
    background: transparent;
    background-image: url(https://static-exp1.licdn.com/sc/h/cwn0a0e7hog2i33c88ucrvot5);
    background-repeat: no-repeat;
    background-size: 2.4rem;
    background-position: top -31.1rem right .1rem;
`;

export const Option = styled.option`
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    border-bottom: 1px solid rgba(0,0,0,.6);
`;

export const Text = styled(Label)`
    margin: 0;
`;

export const Icon = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;

    &:hover {
        background-color: rgba(152,216,244,.25);
        svg {
            color: #006097;
        }
    }

    svg {
        width: 24px;
        height: 24px;
        color: #0073b1;
    }
`;

export const Asterisk = styled.span`
    color: #0073b1;
    margin-left: .2rem; 
`;
