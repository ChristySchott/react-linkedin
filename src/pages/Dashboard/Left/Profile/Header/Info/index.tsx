import React from 'react';

import {
    Container, BoxName, Name, BoxJob, Job,
} from './styles';

const Info: React.FC = () => (
    <Container>
        <BoxName>
            <Name>Christy Hauschild Schott</Name>
        </BoxName>
        <BoxJob>
            <Job>Intern Developer | React | TypeScript | Redux</Job>
        </BoxJob>
    </Container>
);

export default Info;
