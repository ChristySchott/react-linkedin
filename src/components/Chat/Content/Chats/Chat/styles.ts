import styled from 'styled-components';

export const Container = styled.li`
    height: 51px;
    padding-left: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const BoxImage = styled.div`
    width: 40px;
    height: 40px;
    
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`;

export const Text = styled.div`
    height: auto;
    padding: 8px 12px 8px 0;
    margin-left: 8px;
    width: 100%;
    vertical-align: top;
    border-bottom: 1px solid #e6e9ec;
`;

export const Infos = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Name = styled.span`
    font-size: 1.4rem;
    line-height: 1.3;
    font-weight: 400;
    color: rgba(0,0,0,.9);
`;

export const Date = styled(Name)`
    font-size: 1.4rem;
`;

export const Message = styled.div`
    span {
        font-size: 1.2rem;
        line-height: 1.3;
        font-weight: 400;
        color: rgba(0,0,0,.9);
    }
`;
