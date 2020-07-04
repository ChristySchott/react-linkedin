import React from 'react';

import { ReactComponent as Dropdown } from 'assets/profile/dropdown.svg'

import { Container, Number, Info, Icon, Infos, Name, Resume } from './styles';

interface Props {
    number: string;
    name: string;
    resume: string;
}

const Item: React.FC<Props> = ({ number, name, resume }) => {
    return <Container>
        <Info>
            <Number>
                <span>{number}</span>
            </Number>
            <Infos>
                <Name>{name}</Name>
                <Resume>{resume}</Resume>
            </Infos>
        </Info>
        <Icon>
            <Dropdown />
        </Icon>
    </Container>;
}

export default Item;