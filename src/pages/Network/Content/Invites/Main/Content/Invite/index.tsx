import React, { ReactNode } from 'react';

import { Container, Content, User, BoxImage, Image, Text, Name, Job, Connections, Actions, Ignore, Accept } from './styles';

interface Props {
    image: ReactNode;
    name: string;
    job: string;
    connection?: boolean;
}

const Invite: React.FC<Props> = ({ image, name, job, connection = false }) => {
    return <Container>
        <Content>
            <User>
                <BoxImage>
                    <Image>
                        {image}
                    </Image>
                </BoxImage>
                <Text>
                    <Name>{name}</Name>
                    <Job>{job}</Job>
                    {connection && <Connections> Alan Turing e mais 37 pessoas</Connections>}
                </Text>
            </User>
            <Actions>
                <Ignore>Ignorar</Ignore>
                <Accept>Aceitar</Accept>
            </Actions>
        </Content>
    </Container>;
}

export default Invite;