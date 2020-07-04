import React from 'react';

import Author from 'components/Author';
import {
    Container, Box, Text, Name, Job,
} from './styles';

const Profile: React.FC = () => (
    <Container>
        <Box><Author big image="https://media-exp1.licdn.com/dms/image/C4E03AQGY6yMDkDP1ng/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=7bBgbv04teMUzBLeja1x73Znh3V4uJ7ir5IyX_XG7cU" /></Box>
        <Text>
            <Name>
                Ada Lovelace
                <span> &middot; 1º</span>
            </Name>
            <Job>
                Desenvolvedora Front End | Criadora de Conteúdo | Software Engineer
            </Job>
        </Text>
    </Container>
);

export default Profile;
