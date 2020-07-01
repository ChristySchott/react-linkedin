import React from 'react';

import { Link } from 'react-router-dom';

import {
    Container, BoxName, Name, BoxJob, Job,
} from './styles';

interface Props {
    name: string;
    job: string;
}

const Info: React.FC<Props> = ({ name, job }) => (
    <Container>
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
