import React from 'react';

import { Container, BoxImages, Image, Text } from './styles';

const Students: React.FC = () => {
    return <Container>
        <BoxImages>
            <Image><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQH9V1274sm9GA/company-logo_100_100/0?e=1601510400&v=beta&t=r7QG86XRPWCQpg9XY59oN7zLTG3k0FjkSvjBMrScg40" alt="IGTI" /></Image>
        </BoxImages>
        <Text><span>2 ex-alunos</span></Text>
    </Container>;
}

export default Students;