import React from 'react';

import { ReactComponent as Saved } from 'assets/jobs/saved.svg';
import { ReactComponent as Check } from 'assets/jobs/check.svg';
import { ReactComponent as Alert } from 'assets/jobs/alert.svg';
import { ReactComponent as Salary } from 'assets/jobs/salary.svg';
import { ReactComponent as Anun } from 'assets/jobs/anun.svg';

import Wrapper from 'components/Wrapper';
import {
    Container, Content, List, Cta, Button,
} from './styles';
import Item from './Item';

const Jobs: React.FC = () => (
    <Wrapper>
        <Container>
            <Content>
                <List>
                    <Item icon={<Saved />} text="Vagas salvas" />
                    <Item icon={<Check />} text="Candidaturas" />
                    <Item icon={<Alert />} text="Alerta de vagas" />
                    <Item icon={<Salary />} text="Salário" />
                </List>
                <Cta>
                    <Button>
                        <Anun />
                        <span>Anunciar vaga</span>
                    </Button>
                </Cta>
            </Content>
        </Container>
    </Wrapper>
);

export default Jobs;
