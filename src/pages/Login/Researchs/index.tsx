import React from 'react';

import { Container, Content, Flex, Title, Text, Sugestion } from './styles';
import Sugestions from './Sugestions';

const Researchs: React.FC = () => {
    return <Container>
        <Content>

            <Flex>
                <Title>
                    <Text>Encontre vagas e estágios</Text>
                </Title>

                <Sugestion>
                    <Sugestions />
                </Sugestion>
            </Flex>
        </Content>
    </Container>;
}

export default Researchs;