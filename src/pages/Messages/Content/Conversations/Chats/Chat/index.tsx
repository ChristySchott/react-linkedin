import React, { ReactNode } from 'react';

import {
    Container, BoxImage, Infos, Text, Name, Date, Message,
} from './styles';

interface Props {
    image: ReactNode;
    name: string;
    date: string;
    message: string;
}

const Chat: React.FC<Props> = ({
    image, name, date, message,
}) => (
        <Container>
            <BoxImage>
                {image}
            </BoxImage>
            <Text>
                <Infos>
                    <Name>{name}</Name>
                    <Date>{date}</Date>
                </Infos>
                <Message>
                    <span>{message}</span>
                </Message>
            </Text>
        </Container>
    );

export default Chat;
