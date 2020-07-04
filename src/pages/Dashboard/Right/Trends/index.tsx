import React from 'react';

import { ReactComponent as Info } from 'assets/right/info.svg';
import Wrapper from 'components/Wrapper';
import Title from 'components/TitleWithoutHover';
import Container from './styles';
import Topic from './Topic';
import ShowMore from './ShowMore';

const Trends: React.FC = () => (
    <Wrapper>
        <Title title="Assuntos mais discutidos" icon={<Info />} />
        <Container>
            <Topic
                text="Live com Luiza Helena Trajano"
                date="Notícias mais lidas"
                readers="413 leitores"
            />
            <Topic
                text="Bancos antecipam digitalização com pa..."
                date="há 1 d"
                readers="864 leitores"
            />
            <Topic
                text="E-commerce brasileiro cresce 75% em m..."
                date="há 1 d"
                readers="805 leitores"
            />
            <Topic
                text="Recrutamento on-line cresce durante crise"
                date="há 1 d"
                readers="927 leitores"
            />
            <Topic
                text="Brasileiros buscam conhecimento para c..."
                date="há 1 d"
                readers="143 leitores"
            />
            <ShowMore />
        </Container>
    </Wrapper>
);

export default Trends;
