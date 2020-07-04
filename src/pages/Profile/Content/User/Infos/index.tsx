import React from 'react';

import { Container, User, Name, Job, Place, Connections, Box, Contact, Company, Item, Image, NameCompany } from './styles';

const Infos: React.FC = () => {
    return <Container>
        <User>
            <Name>Christy Hauschild Schott</Name>
            <Job>Intern Developer | React | TypeScript | Redux</Job>
            <Box>
                <Place>Venâncio Aires, Rio Grande do Sul, Brasil</Place>
                &middot;
                <Connections>+ de 500 conexões</Connections>
            </Box>
            <Contact>Informações de contato</Contact>
        </User>
        <Company>
            <Item>
                <Image><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQFYrLnUuKUX2A/company-logo_100_100/0?e=1601510400&v=beta&t=aLP0HeiCs4fKBKW_i_jHhhFNOyElyZigS30DO8wpi9s" alt="" /></Image>
                <NameCompany>Kobe - Creative Software House</NameCompany>
            </Item>
            <Item>
                <Image><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQH9V1274sm9GA/company-logo_100_100/0?e=1601510400&v=beta&t=r7QG86XRPWCQpg9XY59oN7zLTG3k0FjkSvjBMrScg40" alt="" /></Image>
                <NameCompany>IGTI</NameCompany>
            </Item>
        </Company>
    </Container>;
}

export default Infos;