import React from 'react';

import { Container, List } from './styles';
import Item from './Item';

const Sugestions: React.FC = () => {
    return <Container>
        <List>
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4D03AQHgrHVLEENyWQ/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=p_Tk6lT-CsdDsme0DvtNdHyUJ4nas1HfZ6Ptldcfvno"
                name="Vitor da Silva"
                job="Software Developer at Example Banco"
            />
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4E03AQFcq3eYVtLxGQ/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=rDl2hZzV9MOoK6Xt_PXqn5lcz8sZkP6jCpa8jtlMIvo"
                name="Ana Neri"
                job="UI/UX Designer at Some Agency"
            />
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4E03AQEGMFb-TXFUEQ/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=aEeTxuSLMbJJfMmtDL5rIRX44k4O97hDrcK96ztIT6U"
                name="Lucas Morales"
                job="React Architect | Frontend Engineer | Software..."
            />
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4D35AQEjFylfxd_Eow/profile-framedphoto-shrink_100_100/0?e=1593900000&v=beta&t=zSvfAX3f0ULFt55dNdfr4Z2qkuy1hRadTD4matQFYqc"
                name="Andressa Schinoff"
                job="Full Stack Developer Student"
            />
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4E03AQEh0vcoEEf2rw/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=mrq4Ai7SNzmWRKUQ3TxJYGz2i1CXykRU5RukowXmXR4"
                name="Vinnicius Gomes"
                job="Programador Junior Fullstack: Node | React ..."
            />
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4E03AQFFC2g34ggKTQ/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=_4paBmNtvdm-uF3GPxXsecXla_QDqlrygO2B-Fcii6c"
                name="Laura Beatris"
                job="Software Developer | Sistemas da Informação"
            />
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4D03AQHa0yUg9dH3RA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=FKo6oe70i2Q6u8CII1gAaB00sA0nWI_G-bHVMVH0BPk"
                name="Caio Agiani"
                job="Software Developer @ Rocketseat"
            />
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4E03AQHnv8W5Ho7iaA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=LPr66W5nbRpoVLBGG7H3kaseESSLKq2glzPIzXrxg2E"
                name="Maicon Augusto"
                job="Analista Programador Junior"
            />
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4D03AQEOxzoEAoCTUw/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=QB9C3aD_PQsa-MLmtEe76oSx26HcmqasPremCEy-RNE"
                name="Gohara Junior"
                job="Mobile Developer at Example"
            />
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4E03AQELkjwYXtQaVQ/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=0gWozOqKf-PIzPXJWWw1nOIrv6e_33nE1r5I5ZJB5DI"
                name="Lorena Góes Montes"
                job="Front End Engineer | Community Manager"
            />
        </List>
    </Container>;
}

export default Sugestions;