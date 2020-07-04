import React from 'react';

import { ReactComponent as IconPremium } from 'assets/left/premium.svg';

import { Container, Tools, CTA } from './styles';

const Premium: React.FC = () => (
    <Container>
        <Tools>Acesse ferramentas exclusivas</Tools>
        <CTA>
            <IconPremium />
            <span>Reative Premium</span>
        </CTA>
    </Container>
);

export default Premium;
