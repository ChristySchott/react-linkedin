import React, { ReactNode } from 'react';
import Wrapper from 'components/Wrapper';

import { Container, Content, Text, Name, New, Alert } from './styles';
import Header from './Header';
import Footer from './Footer';

interface Props {
    number: string;
    name: string;
    job: string;
    photo: ReactNode;
    color: string;
}

const Item: React.FC<Props> = ({ name, number, job, photo, color }) =>
    <Wrapper margin>
        <Container>
            <Content>
                <Header name={name} job={job} photo={photo} color={color} />
                <Footer number={number} />
            </Content>
        </Container>
    </Wrapper>;

export default Item;
