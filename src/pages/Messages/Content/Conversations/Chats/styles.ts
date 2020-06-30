import styled from 'styled-components';

const Container = styled.ul`
    max-height: 558px;
    overflow-y: scroll;

    li:first-child {
        background-color: #f3f6f8;
        box-shadow: 4px 0 0 #0073b1 inset, 0 -1px 0 #f3f6f8 inset;
    }
`;

export default Container;
