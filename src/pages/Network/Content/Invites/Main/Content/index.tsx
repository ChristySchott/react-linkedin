import React from 'react';

import { Container, List } from './styles';
import Invite from './Invite';
import ShowMore from './ShowMore';

const Content: React.FC = () => {
    return <Container>
        <List>
            <Invite
                image="https://media-exp1.licdn.com/dms/image/C4E03AQH8GqmGrnU2oQ/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=RsNWToql7h3r78nZ9mzHB0G1cPO7Co6p38vFfRaHbDY"
                name="Hebiro Nadir Plihenar"
                job="Diretor Comercial"
            />
            <Invite
                image="https://media-exp1.licdn.com/dms/image/C4D03AQGzbu-n1I9DTg/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=LnuN09WuLBJMqoK2xjlaFokx2ZuffbAfJhpJgutl_Oc"
                name="Taigeoge Pueba de Fonseca"
                job="Full Stack Developer"
            />
            <Invite
                image="https://media-exp1.licdn.com/dms/image/C4E03AQFK2hHRNXtBIA/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=cNCQOrcrO4dHhMNUn6Mihq5ybEdBbhIw4ED1g-zm82k"
                name="Lyes Saceu de Canar"
                job="Desenvolvedor Flutter at Company - Software House"
            />
        </List>
        <ShowMore />
    </Container>;
}

export default Content;