import React from 'react';

import {
    Container, BoxTitle, Title, Icon, BoxInfos, Infos,
} from './styles';

interface Props {
    text: string;
    date: string;
    readers: string;
}

const Topic: React.FC<Props> = ({ text, date, readers }) => (
    <Container>
        <BoxTitle>
            <Title>
                <Icon />
                <span>{text}</span>
            </Title>
        </BoxTitle>
        <BoxInfos>
            <Infos>
                {date}
                <span>&middot;</span>
                {readers}
            </Infos>
        </BoxInfos>
    </Container>
);
export default Topic;
