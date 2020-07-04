import React from 'react';

import { Container, List, ListTwo, ListThree } from './styles';
import Item from './Item';

const Content: React.FC = () => {
    return <Container>
        <List>
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4E0BAQHKAqrNccndNg/company-logo_100_100/0?e=1602115200&v=beta&t=4TC5J7koeW7OL-tTyq5nXNL-nKrtcAj3t_-gkBcQvXE"
                name="BrazilJS"
                followers="11.795 seguidores"
            />
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4E0BAQH9V1274sm9GA/company-logo_100_100/0?e=1602115200&v=beta&t=hJqcaMOOgHJZ3Z-HICbURfINszZtN_W8bdBmzYCDr30"
                name="IGTI"
                followers="132.408 seguidores"
            />
        </List>
        <ListTwo>
            <Item
                image="https://media-exp1.licdn.com/dms/image/C560BAQH0VNXBrdkklA/company-logo_100_100/0?e=1602115200&v=beta&t=XNb83dUgoT5hnchTSKyVV30u6CQu6gfL36AH9lyw8E0"
                name="Udemy"
                followers="332.866 seguidores"
            />
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4D0BAQHLWGq5Xb46cQ/company-logo_100_100/0?e=1602115200&v=beta&t=ekZfCzx-kpOkAXp6eOgoHRvwwqbvmi1OaauYjR2BvGc"
                name="DevMedia"
                followers="36.216 seguidores"
            />
        </ListTwo>
        <ListThree>
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4E0BAQEooBvMO2kBVg/company-logo_100_100/0?e=1602115200&v=beta&t=SVfFIpq4ju2OudkCri97uX062v5K9jEyzkro43ArzFo"
                name="Stack Overflow"
                followers="492.600 seguidores"
            />
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4E0BAQHw6D62VjG-1Q/company-logo_100_100/0?e=1602115200&v=beta&t=Zd2KW0a88zoPTvnmiQr3HLxiXCizzU5QznQAxVV0PcI"
                name="Node.js"
                followers="7.792 seguidores"
            />
        </ListThree>
    </Container>;
}

export default Content;