import styled from 'styled-components';

export const Container = styled.li`
    height: 92px;
    border-bottom: 1px solid #cdcfd2;
    padding-left: 12px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #f3f6f8;
        box-shadow: 4px 0 0 #0073b1 inset, 0 -1px 0 #f3f6f8 inset;
    }
`;

export const BoxImage = styled.div`
    width: 56px;
    height: 56px;
    
    img {
        height: 50px;
        border-radius: 50%;
    }
`;

export const Text = styled.div`
    width: 100%;
    padding-left: 8px;
    padding-right: 12px;
`;

export const Infos = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Name = styled.span`
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 400;
    color: rgba(0,0,0,.9);
`;

export const Date = styled(Name)`
    font-size: 1.3rem;
`;

export const Message = styled.div`
    span {
        font-size: 1.3rem;
        line-height: 1.5;
        font-weight: 400;
        color: rgba(0,0,0,.9);
    }
`;
