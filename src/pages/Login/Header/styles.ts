import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: #fff;
    height: 619px;
`;

export const Content = styled.div`
    max-width: 1128px;
    margin: 0 auto;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
`;

export const Logo = styled.div`
    svg {
        width: 135px;
        height: 33px;
    }
`;

export const Buttons = styled.div`
    display: flex;
`;

export const SignUp = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 153px;
    height: 40px;
    color: rgba(0,0,0,0.6);
    background: none;
    border: 0;
    font-size: 1.6rem;
    font-weight: 500;

    &:hover {
        background-color: rgba(207,207,207,0.25);
        color: rgba(0,0,0,0.75);
    }
`;

export const SignIn = styled(SignUp)`
    width: 92px;
    border-radius: 2px;
    color: #0073b1;
    box-shadow: inset 0 0 0 1px #0073b1, inset 0 0 0 2px rgba(0,0,0,0), inset 0 0 0 1px rgba(0,0,0,0);
    margin-left: 12px;

    &:hover {
        background-color: rgba(152,216,244,0.25);
        color: #006097;
        -webkit-box-shadow: inset 0 0 0 1px #0073b1, inset 0 0 0 2px #006097, inset 0 0 0 1px rgba(0,0,0,0);
        box-shadow: inset 0 0 0 1px #0073b1, inset 0 0 0 2px #006097, inset 0 0 0 1px rgba(0,0,0,0);
    }
`;

export const Hero = styled.div`
    display: flex;
    position: relative;
    margin-top: 48px;
`;

export const Image = styled.div`
    position: absolute;
    right: -130px;
    top: -5px;
    img {
        width: 660px;
        height: 660px;
    }
`;
