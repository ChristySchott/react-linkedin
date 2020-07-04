import React, { ReactNode } from 'react';

import { ReactComponent as IconMore } from 'assets/main/more.svg';
import {
    Container, Content, Image, Activity, More,
} from './styles';

interface Props {
    image: ReactNode;
    activity: ReactNode;
    time: string;
}

const Item: React.FC<Props> = ({ image, activity, time }) => (
    <Container>
        <Content>
            <Image>{image}</Image>
            <Activity>{activity}</Activity>
            <More>
                <IconMore />
                <span>{time}</span>
            </More>
        </Content>
    </Container>
);

export default Item;
