import React from 'react';

import { ReactComponent as Users } from 'assets/profile/users.svg';

import {
  Container, Image, Infos, Border, Name, Job, Place, WrapperButton, Button,
  Connections, Icon, Who,
} from './styles';

interface Props {
  image: string;
  name: string;
  job: string;
  place: string;
}

const Item: React.FC<Props> = ({
  image, name, job, place,
}) => (
  <Container>
    <Image>
      <img src={image} alt="" />
    </Image>
    <Border>
      <Infos>
        <Name>
          {name}
          {' '}
          <span>&middot; 1º</span>
        </Name>
        <Job>{job}</Job>
        <Place>{place}</Place>
        <Connections>
          <Icon>
            <Users />
          </Icon>
          <Who>Mayk Brito, Vinícius Passos e mais 33 conexões em comum</Who>
        </Connections>
      </Infos>
      <WrapperButton>
        <Button>
          Enviar mensagem
        </Button>
      </WrapperButton>
    </Border>
  </Container>
);

export default Item;
