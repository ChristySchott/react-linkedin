import React from 'react';

import { Container } from './styles';
import Wrapper from 'components/Wrapper';
import Section from './Section';
import Item from './Item';

const Skills: React.FC = () => {
    return <Wrapper>
        <Container>
            <Section title="Competências e recomendações">
                <Item
                    skill="CSS3"
                    image="https://media-exp1.licdn.com/dms/image/C4D03AQHVVOYiN2OrPw/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=mSSCEABT_gKG7i_P4WbF9BtL9KzfVQGZMh6_rHLpyZQ"
                />
                <Item
                    skill="JavaScript"
                    image="https://media-exp1.licdn.com/dms/image/C4D03AQEgrsZQEyvQ8Q/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=kZ1pebXsE0PFuCBcUWaWvfvQeHunjhYNmZl6k-9L5EM"
                />
                <Item
                    skill="React"
                    image="https://media-exp1.licdn.com/dms/image/C4D03AQFebDKzRD_hbA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=Za_sj7RG69ScevoH3AHmJMvz3bSRsNUxYiAnSMCjB1U"
                />
            </Section>
        </Container>
    </Wrapper>;
}

export default Skills;