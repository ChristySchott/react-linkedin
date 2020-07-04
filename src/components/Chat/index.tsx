import React, { useState } from 'react';

import { ReactComponent as EditIcon } from 'assets/chat/edit.svg';
import { ReactComponent as MoreIcon } from 'assets/chat/more.svg';

import {
  Container, Header, ContentHeader, Left, User, Image, Connection,
  Title, Text, Right, Edit, More, Expand,
} from './styles';
import Content from './Content';

const Chat: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Container onClick={() => setShow(!show)} show={show}>
        <Header>
          <ContentHeader>
            <Left>
              <User>
                <Image><img src="https://media-exp1.licdn.com/dms/image/C4E03AQGArBZoTlAL5Q/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=8TgATuNtdQS00Pg0e5Ci1l7QOrwLHp1y0UlaOYPlq5I" alt="" /></Image>
                <Connection />
              </User>

              <Title>
                <Text>Mensagens</Text>
              </Title>
            </Left>

            <Right>
              <Edit><EditIcon /></Edit>
              <More><MoreIcon /></More>
            </Right>
          </ContentHeader>
        </Header>
        <Expand>
          <Content />
        </Expand>
      </Container>

    </>
  );
};

export default Chat;
