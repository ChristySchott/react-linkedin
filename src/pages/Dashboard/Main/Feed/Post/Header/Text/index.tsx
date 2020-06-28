/* eslint-disable max-len */
import React, { useState } from 'react';

import {
    Container, Content, Button, More,
} from './styles';

const Text: React.FC = () => {
    const [show, setShow] = useState(false);
    return (
        <Container>
            <Content><span>Várias versões novas surgiram ao longo dos anos.</span></Content>
            <Content>
                <span>Lorem ipsum sit dolor.</span>
                <Button onClick={() => setShow(true)} show={show}>
                    ...ver mais
                </Button>
            </Content>

            {show && (
                <More>
                    <p>Libero corporis, rem nostrum quidem ad tenetur eum?</p>
                    <span>#reactjs #frontend #development #javascript</span>
                </More>
            )}
        </Container>
    );
};

export default Text;
