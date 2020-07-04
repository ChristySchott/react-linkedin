import React from 'react';

import { Container, Content, WrapperImages, BoxImages, List, Item, Border, Text, BoxShow, Show } from './styles';

const Header: React.FC = () => {
    return <Container>
        <Content>
            <WrapperImages>
                <BoxImages>
                    <List>
                        <Item><Border><img src="https://media-exp1.licdn.com/dms/image/C5603AQHRFrk8rKdNOg/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=A2gaSq6uIGobKrh9UlNnvn5XYjyD3WhHBUMM-FKYQSw" alt="Someone" /></Border></Item>
                        <Item><Border><img src="https://media-exp1.licdn.com/dms/image/C4D03AQF9z7ZChrcJfw/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=vWAUzMJZc6osJ8mhSHSLKeV9BJZqQlMriuL8TkPrDuI" alt="Someone" /></Border></Item>
                        <Item><Border><img src="https://media-exp1.licdn.com/dms/image/C4D03AQGp5drO8FIehA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=ZdNNbCXuK5m5cpcXxibWnx2ouLJQqGp085M7Kww2Gpg" alt="Someone" /></Border></Item>
                    </List>
                    <Text><strong>Ada Lovelace</strong><span> e mais 4 pessoas aceitaram seu convite de conexão</span></Text>
                </BoxImages>
            </WrapperImages>
            <BoxShow><Show>Visualizar tudo</Show></BoxShow>
        </Content>
    </Container>;
}

export default Header;