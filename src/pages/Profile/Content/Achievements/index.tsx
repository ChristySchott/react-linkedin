import React from 'react';

import { Container, Border } from './styles';
import Wrapper from 'components/Wrapper';
import Section from './Section';
import Item from './Item';

const Achievements: React.FC = () => {
    return <Wrapper>
        <Container>
            <Section title="Conquistas">
                <Item
                    name="idiomas"
                    resume="English &middot; Português"
                    number="2"
                />
                <Border />
                <Item
                    name="projeto"
                    resume="Desenvolvendo a capacidade lógica e cognitiva a partir da informática"
                    number="1"
                />
            </Section>
        </Container>
    </Wrapper>;
}

export default Achievements;