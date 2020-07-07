import styled from 'styled-components';

interface Props {
    show: boolean;
}

export const Container = styled.div<Props>`
    position: fixed;
    bottom: 0;
    right: 20px;
    transform: translateY(510px);
    ${({ show }) => show && 'transform: translateY(1px);'}
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 167ms;

    width: 264px;
    z-index: 10;
    background: #fff;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    padding: 0 8px 0 12px;
    background: #283e4a;
    border-bottom: 1px solid rgba(0,0,0,.15);
    border-radius: 2px 2px 0 0;
    cursor: pointer;
`;

export const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Left = styled.div`
    width: 117px;
    display: flex;
    align-items: center;
`;

export const User = styled.div`
    width: 32px;
    height: 32px;
    position: relative;

    div:first-child {
        height: 32px;
        
        img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }
    }

    div:nth-child(2){
        width: 10px;
        height: 10px;
        border: 1px solid #fff;
    }
`;

export const Image = styled.div`
    border-radius: 50%;
    overflow: hidden;
`;

export const Connection = styled.div`
    position: absolute;
    bottom: 0;
    right: 2px;

    border-radius: 50%;
    border-width: 4px;
    background: #469a1f;
`;

export const Title = styled.div`
    margin-left: 8px;
`;

export const Text = styled.span`
    width: 72px;
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 400;
    color: #fff;
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
`;

export const Edit = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        background-color: hsla(0,0%,100%,.15);
    }

    svg {
        width: 16px;
        height: 16px;
        color: #fff;
    }
`;

export const More = styled(Edit)``;

export const Expand = styled.div`
`;
