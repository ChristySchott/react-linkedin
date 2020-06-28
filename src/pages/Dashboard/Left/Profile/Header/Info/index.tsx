import React from 'react';

import { Link } from 'react-router-dom';

import {
    Container, BoxName, Name, BoxJob, Job,
} from './styles';

const Info: React.FC = () => (
    <Container>
        <Link to="/profile">
            <BoxName>
                <Name>Christy Hauschild Schott</Name>
            </BoxName>
        </Link>
        <BoxJob>
            <Job>Intern Developer | React | TypeScript | Redux</Job>
        </BoxJob>
    </Container>
);

export default Info;
