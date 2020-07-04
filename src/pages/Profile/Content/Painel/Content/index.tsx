import React from 'react';
import Wrapper from 'components/Wrapper';

import { Container, Card, Views, Text } from './styles';

const Content: React.FC = () => {
    return <Wrapper shadow>
        <Container>
            <Card>
                <Views>2.885</Views>
                <Text>Quem viu ser perfil</Text>
            </Card>
            <Card>
                <Views>3.741</Views>
                <Text>visualizações do vídeo</Text>
            </Card>
            <Card>
                <Views>100</Views>
                <Text>ocorrências em resultados de pesquisa</Text>
            </Card>
        </Container>
    </Wrapper>;
}

export default Content;