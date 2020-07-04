import React from 'react';
import Collapsible from 'react-collapsible';

import Title from 'components/Title';
import { FiChevronUp } from 'react-icons/fi';
import { Container, List } from './styles';

interface Props {
    title: string;
    gray?: boolean;
}

const Social: React.FC<Props> = ({ title, children, gray = false }) => (
    <Container>
        <Collapsible
            open
            trigger={<Title small gray={gray} title={title} icon={<FiChevronUp size={20} />} />}
        >
            <List>
                {children}
            </List>
        </Collapsible>
    </Container>
);

export default Social;
