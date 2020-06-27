import React from 'react';

import { ReactComponent as Learning } from 'assets/solutions/learning.svg';
import { ReactComponent as Insights } from 'assets/solutions/insight.svg';
import { ReactComponent as Jobs } from 'assets/solutions/jobs.svg';
import { ReactComponent as Publish } from 'assets/solutions/publish.svg';
import { ReactComponent as Leads } from 'assets/solutions/leads.svg';
import { ReactComponent as Groups } from 'assets/solutions/groups.svg';
import { ReactComponent as ProFinder } from 'assets/solutions/profinder.svg';
import { ReactComponent as Salary } from 'assets/solutions/salary.svg';
import { ReactComponent as SlideShare } from 'assets/solutions/slideshare.svg';
import Container from './styles';
import Item from './Item';

const AnotherSolution: React.FC = () => (
    <Container>
        <Item name="Learning"><Learning /></Item>
        <Item name="Insights"><Insights /></Item>
        <Item name="Anunciar vaga"><Jobs /></Item>
        <Item name="Veicular anúncio"><Publish /></Item>
        <Item name="Encontre leads"><Leads /></Item>
        <Item name="Grupos"><Groups /></Item>
        <Item name="ProFinder"><ProFinder /></Item>
        <Item name="Salary"><Salary /></Item>
        <Item name="Slideshare"><SlideShare /></Item>
    </Container>
);

export default AnotherSolution;
