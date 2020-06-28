import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    cursor: pointer;
`;

export const Cover = styled.div`
    background-image: url(https://media-exp1.licdn.com/dms/image/C4D16AQGpmU8uxMw-EQ/profile-displaybackgroundimage-shrink_200_800/0?e=1598486400&v=beta&t=u_-X3p9-M6FU3gCq5IZ5DNWrslOUINAi7HsDmwWthB4);
    width: 100%;
    height: 54px;
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
        width: 108%;
        height: 123%;
    }
`;
