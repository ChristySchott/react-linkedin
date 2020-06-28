import React from 'react';

import { Container, List, Item } from './styles';

const Records: React.FC = () => (
    <Container>
        <List>
            <Item>
                <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="LIKE" />
                <img src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt="EMPATHY" />
                <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="PRAISE" />
                <span>209</span>
            </Item>
            <Item>&middot;</Item>
            <Item>
                <span>24 comentários</span>
            </Item>
            <Item>&middot;</Item>
            <Item>
                <span>1.434 visualizações</span>
            </Item>
        </List>
    </Container>
);

export default Records;
