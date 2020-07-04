import React from 'react';

import { Container, Content, List, Item } from './styles';

const Footer: React.FC = () => {
    return <Container>
        <Content>
            <List>
                <Item><img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="" /></Item>
                <Item><img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="" /></Item>
                <Item><img src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt="" /></Item>
                <Item>370</Item>
                <Item>&middot;</Item>
                <Item>76 comentários</Item>
            </List>
        </Content>
    </Container>;
}

export default Footer;