import React, { useState } from 'react';

import Collapsible from 'react-collapsible';
import Topic from '../Topic';
import Button from './Button';

import Container from './styles';

function ShowMore() {
    const [reverse, setReverse] = useState(false);
    return (
        <Container reverse={reverse}>
            <Collapsible
                trigger={<Button />}
                onOpening={() => setReverse(true)}
                onClosing={() => setReverse(false)}
            >
                <Topic
                    text="Como iniciar em um novo trabalho rem..."
                    date="há 1 d"
                    readers="136 leitores"
                />
                <Topic
                    text="Expressões que indicam sintomas de bu..."
                    date="há 1 d"
                    readers="130 leitores"
                />
                <Topic
                    text="O papel do líder no desenvolvimento de..."
                    date="há 1 d"
                    readers="112 leitores"
                />
                <Topic
                    text="Pedidos de seguro-desemprego sobem ..."
                    date="há 1 d"
                    readers="108 leitores"
                />
            </Collapsible>
        </Container>
    );
}

export default ShowMore;
