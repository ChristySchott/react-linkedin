import React from 'react';

import Container from './styles';
import Profile from './Profile';
import Day from './Day';
import Message from './Message';

const Messages: React.FC = () => (
  <Container>
    <Profile />
    <Day day="Quarta-feira" />
    <Message
      image="https://media-exp1.licdn.com/dms/image/C4E03AQGY6yMDkDP1ng/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=7bBgbv04teMUzBLeja1x73Znh3V4uJ7ir5IyX_XG7cU"
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
      image="https://media-exp1.licdn.com/dms/image/C4E03AQGArBZoTlAL5Q/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=8TgATuNtdQS00Pg0e5Ci1l7QOrwLHp1y0UlaOYPlq5I"
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
      image="https://media-exp1.licdn.com/dms/image/C4E03AQGY6yMDkDP1ng/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=7bBgbv04teMUzBLeja1x73Znh3V4uJ7ir5IyX_XG7cU"
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
