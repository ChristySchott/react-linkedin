import React, { useState } from 'react';

import { ReactComponent as UserFour } from 'assets/main/four.svg';

import Collapsible from 'react-collapsible';
import Button from './Button';

import { Container, Box } from './styles';
import Invite from '../Invite';

function ShowMore() {
    const [reverse, setReverse] = useState(false);
    return (
        <Container reverse={reverse}>
            <Collapsible
                trigger={<Button />}
                onOpening={() => setReverse(true)}
                onClosing={() => setReverse(false)}
            >
                <Box>
                    <Invite
                        image={<UserFour />}
                        name="Hebiro Nadir Plihenar"
                        job="Diretor Comercial"
                    />
                </Box>
            </Collapsible>
        </Container>
    );
}

export default ShowMore;
