import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-size: 1.2rem;
        line-height: 1.33333;
        font-weight: 600;
        color: rgba(0,0,0,.9);
    }

    span:last-child {
        color: rgba(0, 0, 0, .6);
    }

    p {
        font-size: 1.4rem;
        line-height: 1.42857;
        color: rgba(0,0,0,.9);
        font-weight: 400;
    }
    
    strong {
        color: rgba(0,0,0,.9);
    }

    a {
        font-size: 1.4rem;
        line-height: 1.42857;
        font-weight: 400;
        color: rgba(0,0,0,.9);
        margin-top: 2px;
    }
`;

export const CTA = styled.div`
    height: 32px;
    margin-top: 12px;`;

export const Button = styled.button`
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 167ms;
    align-items: center;
    border: none;
    border-radius: 2px;
    font-weight: 600;
    display: inline-flex;
    justify-content: center;
    min-width: 6.4rem;
    max-width: 480px;
    overflow: hidden;
    text-align: center;
    transition-property: background-color,box-shadow,color;
    vertical-align: middle;
    font-size: 1.6rem;
    min-height: 3.2rem;
    padding: .6rem 1.2rem;

    background-color: transparent;
    color: #0073b1;
    box-shadow: inset 0 0 0 1px #0073b1;

    &:hover {
        background-color: rgba(152,216,244,.25);
        color: #006097;
        box-shadow: inset 0 0 0 2px #006097;
    }
`;
