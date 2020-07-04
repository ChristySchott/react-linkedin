import React from 'react';

import { FiMoreHorizontal } from 'react-icons/fi';
import {
    Container, Content, Text, Label,
} from './styles';

const Ad: React.FC = () => (
    <Container>
        <Content>
            <Text>
                <strong>Curso Maquiagem Na Web - </strong>
            Aprenda como se Tornar uma Profissional em Maquiagem. Apenas 39,90
            </Text>
            <Label>
                <span>Anúncio</span>
                <FiMoreHorizontal size={16} />
            </Label>
        </Content>
    </Container>
);

export default Ad;
