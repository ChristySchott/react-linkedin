import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;


export const Cover = styled.div`
    height: 198px;
    img {
        width: 100%;
    }

    position: relative;
`

export const Icon = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    
    position: absolute;
    top: 20px;
    right: 20px;

    svg {
        color: #0073b1;
        width: 16px;
        height: 16px;
    }

`

export const Infos = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 24px 24px;
    position: absolute;
    top: 100px;
`

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
    border: 3px solid rgb(200, 200, 200);

    img {
        width: 152px;
        height: 152px;
    }
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
`

export const Add = styled.button`
    width: 223px;
    height: 32px;
    background-color: #0073b1;
    color: #fff;
    font-size: 1.5rem;
    padding: .6rem 1.2rem;
    line-height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    margin-right: 10px;
    
    &:hover {
        background-color: #006097;
    }

    svg {
        margin: 5px 0 0 5px;
    }
`

export const More = styled(Add)`
    width: 71px;
    background-color: transparent;
    color: rgba(0,0,0,.6);
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.6);

    &:hover {
        background-color: rgba(207,207,207,.25);
        color: rgba(0,0,0,.75);
    }
`

export const Edit = styled(Icon)`
    position: relative;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    svg {
        color: #0073b1;
        width: 24px;
        height: 24px;
    }

    &:hover {
        background-color: rgba(152,216,244,.25);
        color: #006097;
    }
`

export const Drop = styled.div``