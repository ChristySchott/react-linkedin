import React from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import { Container, Icon, Content } from './styles';

const Input: React.FC = () => (
  <Container>
    <Icon><AiOutlineSearch size={18} /></Icon>
    <Content type="text" name="search" placeholder="Pesquisar" />
  </Container>
);

export default Input;
