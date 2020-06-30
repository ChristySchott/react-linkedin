import React from 'react';

import { ReactComponent as UserOne } from 'assets/main/one.svg';
import { ReactComponent as UserTwo } from 'assets/main/two.svg';
import { ReactComponent as UserThree } from 'assets/main/three.svg';
import { ReactComponent as UserFour } from 'assets/main/four.svg';

import Author from 'components/Author';
import Container from './styles';
import Chat from './Chat';

const Chats: React.FC = () => (
    <Container>
        <Chat
            image={<UserOne />}
            name="Ada Lovelace"
            date="27 de jun de"
            message="Ada: Obrigado, Christy."
        />
        <Chat
            image={<Author image={<UserTwo />} />}
            name="Alan Turing"
            date="26 de jun de"
            message="Você: Boa noite, Alan! Uau, que ideia incrível ..."
        />
        <Chat
            image={<UserThree />}
            name="Sherlock Holme..."
            date="25 de jun de"
            message="Você: Show! Muito obrigado Debora, a honra é toda..."
        />
        <Chat
            image={<Author image={<UserFour />} />}
            name="Bilbo Bolseiro"
            date="25 de jun de"
            message="Bilbo: Muito obrigado!"
        />
        <Chat
            image={<Author image={<UserOne />} />}
            name="Ada Lovelace"
            date="27 de jun de"
            message="Ada: Obrigado, Christy."
        />
        <Chat
            image={<Author image={<UserTwo />} />}
            name="Alan Turing"
            date="26 de jun de"
            message="Você: Boa noite, Alan! Uau, que ideia incrível ..."
        />
        <Chat
            image={<UserThree />}
            name="Sherlock Holme..."
            date="25 de jun de"
            message="Você: Show! Muito obrigado Debora, a honra é toda..."
        />
        <Chat
            image={<Author image={<UserFour />} />}
            name="Bilbo Bolseiro"
            date="25 de jun de"
            message="Bilbo: Muito obrigado!"
        />
        <Chat
            image={<UserOne />}
            name="Ada Lovelace"
            date="27 de jun de"
            message="Ada: Obrigado, Christy."
        />
        <Chat
            image={<Author image={<UserTwo />} />}
            name="Alan Turing"
            date="26 de jun de"
            message="Você: Boa noite, Alan! Uau, que ideia incrível ..."
        />
        <Chat
            image={<UserThree />}
            name="Sherlock Holme..."
            date="25 de jun de"
            message="Você: Show! Muito obrigado Debora, a honra é toda..."
        />
        <Chat
            image={<UserFour />}
            name="Bilbo Bolseiro"
            date="25 de jun de"
            message="Bilbo: Muito obrigado!"
        />
        <Chat
            image={<UserTwo />}
            name="Alan Turing"
            date="26 de jun de"
            message="Você: Boa noite, Alan! Uau, que ideia incrível ..."
        />
        <Chat
            image={<Author image={<UserThree />} />}
            name="Sherlock Holme..."
            date="25 de jun de"
            message="Você: Show! Muito obrigado Debora, a honra é toda..."
        />
        <Chat
            image={<UserFour />}
            name="Bilbo Bolseiro"
            date="25 de jun de"
            message="Bilbo: Muito obrigado!"
        />
        <Chat
            image={<Author image={<UserTwo />} />}
            name="Alan Turing"
            date="26 de jun de"
            message="Você: Boa noite, Alan! Uau, que ideia incrível ..."
        />
        <Chat
            image={<UserThree />}
            name="Sherlock Holme..."
            date="25 de jun de"
            message="Você: Show! Muito obrigado Debora, a honra é toda..."
        />
        <Chat
            image={<UserFour />}
            name="Bilbo Bolseiro"
            date="25 de jun de"
            message="Bilbo: Muito obrigado!"
        />
        <Chat
            image={<Author image={<UserOne />} />}
            name="Alan Turing"
            date="26 de jun de"
            message="Você: Boa noite, Alan! Uau, que ideia incrível ..."
        />
        <Chat
            image={<UserThree />}
            name="Sherlock Holme..."
            date="25 de jun de"
            message="Você: Show! Muito obrigado Debora, a honra é toda..."
        />
        <Chat
            image={<UserFour />}
            name="Bilbo Bolseiro"
            date="25 de jun de"
            message="Bilbo: Muito obrigado!"
        />
    </Container>
);

export default Chats;
