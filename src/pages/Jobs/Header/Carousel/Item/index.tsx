import React from 'react';
import Wrapper from 'components/Wrapper';

import { Container, Content, Text, Name, New, Alert } from './styles';

interface Props {
    name: string;
    news: string;
    alert?: string;
}

const Item: React.FC<Props> = ({ name, news, alert = "Mundialmente" }) =>
    <Wrapper margin>
        <Container>
            <Content>
                <Text>
                    <Name>{name}</Name>
                    <New>{news}</New>
                </Text>
                <Alert>{alert}</Alert>
            </Content>
        </Container>
    </Wrapper>;

export default Item;
