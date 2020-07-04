import React from 'react';

import { Container } from './styles';
import Wrapper from 'components/Wrapper';
import Section from './Section';
import Item from './Item';

const Experience: React.FC = () => {
    return <Wrapper>
        <Container>
            <Section title="Experiência">
                <Item
                    name="Intern Developer"
                    company="Kobe - Creative Software House"
                    date="mai. de 2020 - o momento &middot; 3 meses"
                    image="https://media-exp1.licdn.com/dms/image/C4E0BAQFYrLnUuKUX2A/company-logo_100_100/0?e=1601510400&v=beta&t=aLP0HeiCs4fKBKW_i_jHhhFNOyElyZigS30DO8wpi9s"
                />
                <Item
                    name="Intern Secretary"
                    company="Eccos Estágio &middot; Estágio"
                    date="jul. de 2018 - jan. de 2019 &middot; 7 meses"
                    image="https://media-exp1.licdn.com/dms/image/C4E0BAQHKAqrNccndNg/company-logo_100_100/0?e=1601510400&v=beta&t=P7s_li1CqvSQlJCN-bdWgCtOF4h9EWZCORpAlj9cDVk"
                />
            </Section>
            <Section title="Formação Acadêmica">
                <Item
                    name="IGTI"
                    company="Bootcamp Full Stack"
                    date="2020 - 2020"
                    image="https://media-exp1.licdn.com/dms/image/C4E0BAQH9V1274sm9GA/company-logo_100_100/0?e=1601510400&v=beta&t=r7QG86XRPWCQpg9XY59oN7zLTG3k0FjkSvjBMrScg40"
                />
                <Item
                    name="Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul - Campus Venâncio Aires"
                    company="4, Técnico em Informática"
                    date="2017 - 2020"
                    image="https://media-exp1.licdn.com/dms/image/C4E0BAQFND8qfsi3rQQ/company-logo_100_100/0?e=1602115200&v=beta&t=r5hO_9_EsFfnjy-lTEOx-dCpzA9XxHxw3Jzvap5RvmU"
                />
            </Section>
            <Section title="Licenças e certificados">
                <Item
                    name="Bootstrap 4"
                    company="Origamid"
                    certificate="Emitido em mai. de 2020 &middot; Nenhuma data de expiração"
                    image="https://media-exp1.licdn.com/dms/image/C4E0BAQFCIA41zzuT5Q/company-logo_100_100/0?e=1601510400&v=beta&t=RqSB5RXjwoF564Ia4Rf1X4_E6xbDNrTtsm4xBN16PPU"
                />
                <Item
                    name="CSS Flexboc"
                    company="Origamid"
                    certificate="Emitido em mai. de 2020 &middot; Nenhuma data de expiração"
                    image="https://media-exp1.licdn.com/dms/image/C4E0BAQFCIA41zzuT5Q/company-logo_100_100/0?e=1601510400&v=beta&t=RqSB5RXjwoF564Ia4Rf1X4_E6xbDNrTtsm4xBN16PPU"
                />
                <Item
                    name="CSS Flexboc"
                    company="Origamid"
                    certificate="Emitido em mai. de 2020 &middot; Nenhuma data de expiração"
                    image="https://media-exp1.licdn.com/dms/image/C4E0BAQFCIA41zzuT5Q/company-logo_100_100/0?e=1601510400&v=beta&t=RqSB5RXjwoF564Ia4Rf1X4_E6xbDNrTtsm4xBN16PPU"
                />
            </Section>
            <Section title="Experiência de Voluntariado">
                <Item
                    name="Tradutor"
                    company="GitHub "
                    date="mar. de 2020 &middot; 1 mês"
                    image="https://media-exp1.licdn.com/dms/image/C560BAQGO4Mxhy8KAgQ/company-logo_100_100/0?e=1601510400&v=beta&t=-2qqQfXlzydknuEciiHTyo1ngZvoE5qXu-ZEWzDQszY"
                />
                <Item
                    name="Tradutor"
                    company="GitHub "
                    date="jun. de 2020 &middot; 1 mês"
                    image="https://media-exp1.licdn.com/dms/image/C560BAQGO4Mxhy8KAgQ/company-logo_100_100/0?e=1601510400&v=beta&t=-2qqQfXlzydknuEciiHTyo1ngZvoE5qXu-ZEWzDQszY"
                />
            </Section>
        </Container>
    </Wrapper>;
}

export default Experience;