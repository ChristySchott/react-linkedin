import React from 'react';

import { Container, Image, Infos, Name, Company, Date, Certificate } from './styles';

interface Props {
    image: string;
    name: string;
    company: string;
    date?: string;
    certificate?: string;
}

const Item: React.FC<Props> = ({ image, name, company, date, certificate }) => {
    return <Container>
        <Image>
            <img src={image} alt="" />
        </Image>
        <Infos>
            <Name>{name}</Name>
            <Company>{company}</Company>
            <Date>{date}</Date>
            <Certificate>{certificate}</Certificate>
        </Infos>
    </Container>;
}

export default Item;