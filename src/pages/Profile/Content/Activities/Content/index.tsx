import React from 'react';

import { Container, List, ListTwo } from './styles';
import Item from './Item';

const Content: React.FC = () => {
    return <Container>
        <List>
            <Item
                image="https://media-exp1.licdn.com/dms/image/sync/C4D27AQGp9h5ORQqRww/articleshare-shrink_160/0?e=1593828000&v=beta&t=Fu5c_ewF5mB-dLlqBjqauEKziWUtsTUjBCelUVllRXI"
                name="Sensacional, Anderson! Parabéns pela iniciativa!"
            />
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4D05AQGchI0_ZmTCvg/videocover-low/0?e=1593828000&v=beta&t=YzJ4CM2rkDHZ0fc3sBheHACRB-04M8_JjDUdwIFX79w"
                name="Show cara, ta bem fiel! To desenvolvendo um projeot pessoal p..."
            />
        </List>
        <ListTwo>
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4D05AQGchI0_ZmTCvg/videocover-low/0?e=1593828000&v=beta&t=YzJ4CM2rkDHZ0fc3sBheHACRB-04M8_JjDUdwIFX79w"
                name="Que daora, mano! Parabéns pela disposição, abraços!"
            />
            <Item
                image="https://media-exp1.licdn.com/dms/image/C4D22AQEe-fk1lb9myQ/feedshare-shrink_160/0?e=1596672000&v=beta&t=5EYvozuhpfeXe-XvbMN2LZoOPu4nQKXhTlRXtC894Wc"
                name="Show cara, ta bem fiel! To desenvolvendo um projeot pessoal p..."
            />
        </ListTwo>
    </Container>;
}

export default Content;