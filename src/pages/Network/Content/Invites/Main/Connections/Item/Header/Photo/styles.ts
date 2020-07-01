import styled from 'styled-components';

interface Props {
    color: string;
}

export const Container = styled.div`
    position: relative;
    cursor: pointer;
    min-width: 180px;
    width: 180px;
`;

export const Cover = styled.div<Props>`
    background-color: ${({ color }) => color};
    width: 180px;
    height: 62px;
    background-repeat: no-repeat;
    background-size: 186px;
    overflow: hidden;
`;

export const User = styled.div`
    height: 65px;
    width: 65px;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: inset 0 1.5px 3px 0 rgba(0,0,0,.15), 0 1.5px 3px 0 rgba(0,0,0,.15);
    background-color: #fff;
    overflow: hidden;

    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);

    svg{
        width: 65px;
        height: 65px;
    }
`;
