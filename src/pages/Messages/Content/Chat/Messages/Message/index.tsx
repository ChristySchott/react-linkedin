import React, { ReactNode } from 'react';

import {
    Container, Box, Text, Infos, Name, Connection, Content,
} from './styles';

interface Props {
    image: string;
    content: ReactNode;
    name: string;
    time: string;
}

const Message: React.FC<Props> = ({
    image, name, time, content,
}) => (
        <Container>
            <Box><img src={image} alt="" /></Box>
            <Text>
                <Infos>
                    <Name>{name}</Name>
                    <Connection>
                        &middot;
                    {time}
                    </Connection>
                </Infos>
                <Content>
                    {content}
                </Content>
            </Text>
        </Container>
    );

export default Message;
