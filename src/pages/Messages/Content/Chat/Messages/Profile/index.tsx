import React from 'react';

import { ReactComponent as UserOne } from 'assets/main/one.svg';

import Author from 'components/Author';
import {
    Container, Box, Text, Name, Job,
} from './styles';

const Profile: React.FC = () => (
    <Container>
        <Box><Author big image={<UserOne />} /></Box>
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
