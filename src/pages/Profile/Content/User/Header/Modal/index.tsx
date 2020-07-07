import React from 'react';

import { ReactComponent as Close } from 'assets/profile/close.svg';
import { ReactComponent as Pencil } from 'assets/profile/pencil.svg';

import {
  Container, Header, Title, Text, Icon, Cover, IconEdit, Infos, Photo, Content,
} from './styles';
import Fields from './Fields';

interface Props {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Modal: React.FC<Props> = ({ onClick }) => (
  <Container>
    <Header>
      <Title>
        <Text>Editar introdução</Text>
        <Icon onClick={onClick}><Close /></Icon>
      </Title>
    </Header>

    <Content>
      <Cover>
        <img src="https://media-exp1.licdn.com/dms/image/C4D16AQGpmU8uxMw-EQ/profile-displaybackgroundimage-shrink_350_1400/0?e=1599091200&v=beta&t=noEs9gLtrid8KdnpUURIH2CGqjM7DVbqBZTYrc8zU20" alt="" />
        <IconEdit><Pencil /></IconEdit>
      </Cover>
      <Infos>
        <Photo><img src="https://media-exp1.licdn.com/dms/image/C4E03AQGArBZoTlAL5Q/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=JXSG-XBL5KiTpFNaoep8V-K7JwhvadNfwmvx4VellKA" alt="" /></Photo>
      </Infos>
      <Fields />
    </Content>
  </Container>
);

export default Modal;
