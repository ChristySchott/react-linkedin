import React from 'react';

import { IoIosClose } from 'react-icons/io';
import { Container, Content } from './styles';

interface Props {
    toggleModal: any;
}

const Close: React.FC<Props> = ({ toggleModal }) => (
    <Container>
        <Content>
            <button type="button" onClick={toggleModal}>
                <IoIosClose size={50} />
            </button>
        </Content>
    </Container>
);

export default Close;
