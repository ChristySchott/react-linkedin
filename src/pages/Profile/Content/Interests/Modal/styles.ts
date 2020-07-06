import styled from 'styled-components';

interface Props {
    active: number;
}

export const Container = styled.div`
    width: 744px;
`;

export const Header = styled.div`
    height: 89px;
    padding: 16px 32px 8px;
    border-bottom: 1px solid rgba(0,0,0,.15);
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 28px;
`;

export const Text = styled.h2`
    font-size: 2rem;
    line-height: 1.4;
    color: rgba(0,0,0,.9);
    font-weight: 400;
    font-style: normal;
    margin-bottom: 0;
    padding-right: 1.6rem;
`;

export const Icon = styled.button`
    height: 4rem;
    width: 4rem;
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
    padding: 8px 25px;
    overflow-y: scroll;
    overflow-x:hidden;
    max-height: 400px;
`;
