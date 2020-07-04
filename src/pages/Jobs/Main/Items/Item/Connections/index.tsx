import React from 'react';

import { Container, BoxImages, Border, List, Item, Text } from './styles';

const Connections: React.FC = () => {
    return <Container>
        <BoxImages>
            <List>
                <Item><Border><img src="https://media-exp1.licdn.com/dms/image/C5603AQHRFrk8rKdNOg/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=A2gaSq6uIGobKrh9UlNnvn5XYjyD3WhHBUMM-FKYQSw" alt="Someone" /></Border></Item>
                <Item><Border><img src="https://media-exp1.licdn.com/dms/image/C4D03AQF9z7ZChrcJfw/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=vWAUzMJZc6osJ8mhSHSLKeV9BJZqQlMriuL8TkPrDuI" alt="Someone" /></Border></Item>
                <Item><Border><img src="https://media-exp1.licdn.com/dms/image/C4D03AQGp5drO8FIehA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=ZdNNbCXuK5m5cpcXxibWnx2ouLJQqGp085M7Kww2Gpg" alt="Someone" /></Border></Item>
            </List>
        </BoxImages>
        <Text><span>6 conexões</span></Text>
    </Container>;
}

export default Connections;