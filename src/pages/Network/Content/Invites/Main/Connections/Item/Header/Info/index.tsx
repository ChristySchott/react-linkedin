import React from 'react';

import { Link } from 'react-router-dom';

import {
    Container, BoxName, Name, BoxJob, Job,
} from './styles';

interface Props {
    name: string;
    job: string;
    padding?: boolean
}

const Info: React.FC<Props> = ({ name, job, padding = false }) => (
    <Container padding={padding}>
        <Link to="/profile">
            <BoxName>
                <Name>{name}</Name>
            </BoxName>
        </Link>
        <BoxJob>
            <Job>{job}</Job>
        </BoxJob>
    </Container>
);

export default Info;
