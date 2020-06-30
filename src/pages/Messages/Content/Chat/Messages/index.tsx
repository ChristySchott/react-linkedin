import React from 'react';

import { ReactComponent as UserOne } from 'assets/main/one.svg';
import { ReactComponent as UserMe } from 'assets/profile.svg';
import Container from './styles';
import Profile from './Profile';
import Day from './Day';
import Message from './Message';

const Messages: React.FC = () => (
    <Container>
        <Profile />
        <Day day="Quarta-feira" />
        <Message
            image={<UserOne />}
            name="Ada Lovelace"
            time="14:22"
            content={(
                <span>
                    Olá Christy!
                    <br />
                    Seja bem-vindo à minha rede!
                    <br />
                    Obrigado por ter me adicionado!
                    <br />
                    Abraços
                </span>
            )}
        />
        <Message
            image={<UserMe />}
            name="Christy Hauschild Schott"
            time="16:27"
            content={(
                <span role="img" aria-label="smile emoji">
                    Shoow! Muito obrigado Ada, a honra é toda minha 😁
                    <br />
                    <br />
                    No que eu puder ajudar é só chamar, abração!
                </span>
            )}
        />
        <Day day="Sexta-feira" />
        <Message
            image={<UserOne />}
            name="Ada Lovelace"
            time="21:22"
            content={(
                <span>
                    Obrigado, Christy!
                </span>
            )}
        />
    </Container>
);

export default Messages;
